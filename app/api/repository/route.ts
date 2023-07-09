import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const url = await req.json();
  const parts = url.split("/");
  const repository = url.includes("#")
    ? `${parts[3]}/${parts[4]}`.split("#")[0]
    : `${parts[3]}/${parts[4]}`;

  const getData = await fetch(`https://api.github.com/repos/${repository}`);
  const repo = await getData.json();

  return NextResponse.json({ data: repo, status: 201 });
};
