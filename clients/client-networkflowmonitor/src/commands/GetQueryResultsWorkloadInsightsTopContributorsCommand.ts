// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetQueryResultsWorkloadInsightsTopContributorsInput,
  GetQueryResultsWorkloadInsightsTopContributorsOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import {
  de_GetQueryResultsWorkloadInsightsTopContributorsCommand,
  se_GetQueryResultsWorkloadInsightsTopContributorsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsCommandInput
  extends GetQueryResultsWorkloadInsightsTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsCommandOutput
  extends GetQueryResultsWorkloadInsightsTopContributorsOutput,
    __MetadataBearer {}

/**
 * <p>Return the data for a query with the Network Flow Monitor query interface.
 *    		You specify the query that you want to return results for by providing a query ID
 *    		and a monitor name. This query returns the top contributors for a specific monitor.</p>
 *          <p>Create a query ID for this call by calling the corresponding API call to start the query,
 *    		<code>StartQueryWorkloadInsightsTopContributors</code>. Use the scope ID that was returned
 *    		for your account by <code>CreateScope</code>.</p>
 *          <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific
 *    		metric type, related to a scope (for workload insights) or a monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryResultsWorkloadInsightsTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryResultsWorkloadInsightsTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryResultsWorkloadInsightsTopContributorsInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetQueryResultsWorkloadInsightsTopContributorsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsWorkloadInsightsTopContributorsOutput
 * //   topContributors: [ // WorkloadInsightsTopContributorsRowList
 * //     { // WorkloadInsightsTopContributorsRow
 * //       accountId: "STRING_VALUE",
 * //       localSubnetId: "STRING_VALUE",
 * //       localAz: "STRING_VALUE",
 * //       localVpcId: "STRING_VALUE",
 * //       localRegion: "STRING_VALUE",
 * //       remoteIdentifier: "STRING_VALUE",
 * //       value: Number("long"),
 * //       localSubnetArn: "STRING_VALUE",
 * //       localVpcArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsWorkloadInsightsTopContributorsCommandInput - {@link GetQueryResultsWorkloadInsightsTopContributorsCommandInput}
 * @returns {@link GetQueryResultsWorkloadInsightsTopContributorsCommandOutput}
 * @see {@link GetQueryResultsWorkloadInsightsTopContributorsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsWorkloadInsightsTopContributorsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkFlowMonitor service.</p>
 *
 * @public
 */
export class GetQueryResultsWorkloadInsightsTopContributorsCommand extends $Command
  .classBuilder<
    GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
    GetQueryResultsWorkloadInsightsTopContributorsCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFlowMonitor", "GetQueryResultsWorkloadInsightsTopContributors", {})
  .n("NetworkFlowMonitorClient", "GetQueryResultsWorkloadInsightsTopContributorsCommand")
  .f(void 0, void 0)
  .ser(se_GetQueryResultsWorkloadInsightsTopContributorsCommand)
  .de(de_GetQueryResultsWorkloadInsightsTopContributorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsWorkloadInsightsTopContributorsInput;
      output: GetQueryResultsWorkloadInsightsTopContributorsOutput;
    };
    sdk: {
      input: GetQueryResultsWorkloadInsightsTopContributorsCommandInput;
      output: GetQueryResultsWorkloadInsightsTopContributorsCommandOutput;
    };
  };
}
