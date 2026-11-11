export async function verifyHuman(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // A deployed build must fail closed until Cloudflare Turnstile is configured.
  if (!secret) return process.env.NODE_ENV !== "production";
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token });
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', body, cache: 'no-store', signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) return false;
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch { return false; }
}
