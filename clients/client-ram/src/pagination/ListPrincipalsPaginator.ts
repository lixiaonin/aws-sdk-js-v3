// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPrincipalsCommand,
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput,
} from "../commands/ListPrincipalsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPrincipalsCommandInput,
  ...args: any
): Promise<ListPrincipalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPrincipalsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPrincipals(
  config: RAMPaginationConfiguration,
  input: ListPrincipalsCommandInput,
  ...additionalArguments: any
): Paginator<ListPrincipalsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPrincipalsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
