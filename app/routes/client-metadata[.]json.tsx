import { client } from "#/atproto/client";

export async function loader() {
  return Response.json(client.clientMetadata);
}
