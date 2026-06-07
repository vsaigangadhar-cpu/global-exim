import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'Globeon Exim' });
}

export async function POST(request) {
  try {
    const body = await request.json();
    return NextResponse.json({ received: true, data: body });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}
