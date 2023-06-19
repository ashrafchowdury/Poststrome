import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const mediaUrl = await req.json();
  const userRepo = mediaUrl.replace("https://github.com/", "");

  const getData = await fetch(`https://api.github.com/repos/${userRepo}`);
  const repo = await getData.json();

  return NextResponse.json({ data: repo });
};
