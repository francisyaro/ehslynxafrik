export class RequestBodyError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message);
  }
}

/** Read a small JSON request without trusting Content-Length or allocating an unlimited body. */
export async function readLimitedJson(request: Request, limit = 15_000): Promise<unknown> {
  const contentType = request.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase();
  if (contentType !== "application/json") {
    throw new RequestBodyError("Format JSON requis", 415);
  }
  if (Number(request.headers.get("content-length") || 0) > limit) {
    throw new RequestBodyError("Requête trop volumineuse", 413);
  }
  if (!request.body) throw new RequestBodyError("Corps de requête manquant", 400);

  const chunks: Uint8Array[] = [];
  const reader = request.body.getReader();
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > limit) throw new RequestBodyError("Requête trop volumineuse", 413);
      chunks.push(value);
    }
  } catch (error) {
    await reader.cancel().catch(() => undefined);
    throw error;
  }
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder().decode(body));
  } catch {
    throw new RequestBodyError("Requête JSON invalide", 400);
  }
}
