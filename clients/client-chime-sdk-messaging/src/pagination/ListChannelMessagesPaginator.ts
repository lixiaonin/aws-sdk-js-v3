// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelMessagesCommandInput,
  ...args: any
): Promise<ListChannelMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelMessagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListChannelMessages(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMessagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelMessagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKMessagingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKMessaging | ChimeSDKMessagingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
