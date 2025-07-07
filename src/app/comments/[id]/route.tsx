import { comments } from "../data";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const comment = comments.find((c) => c.id === parseInt(params.id));
  if (!comment) {
    return new Response("Not Found", { status: 404 });
  }
  return Response.json(comment);
}