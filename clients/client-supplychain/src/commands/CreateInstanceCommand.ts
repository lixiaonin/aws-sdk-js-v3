// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInstanceRequest, CreateInstanceResponse } from "../models/models_0";
import { de_CreateInstanceCommand, se_CreateInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandInput extends CreateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandOutput extends CreateInstanceResponse, __MetadataBearer {}

/**
 * <p>Create a new instance for AWS Supply Chain. This is an asynchronous operation. Upon receiving a CreateInstance request, AWS Supply Chain immediately returns the instance resource, with instance ID,  and the initializing state while simultaneously creating all required Amazon Web Services resources for an instance creation. You can use GetInstance to check the status of the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, CreateInstanceCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, CreateInstanceCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // CreateInstanceRequest
 *   instanceName: "STRING_VALUE",
 *   instanceDescription: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceResponse
 * //   instance: { // Instance
 * //     instanceId: "STRING_VALUE", // required
 * //     awsAccountId: "STRING_VALUE", // required
 * //     state: "Initializing" || "Active" || "CreateFailed" || "DeleteFailed" || "Deleting" || "Deleted", // required
 * //     webAppDnsDomain: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"),
 * //     lastModifiedTime: new Date("TIMESTAMP"),
 * //     instanceName: "STRING_VALUE",
 * //     instanceDescription: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE",
 * //     versionNumber: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateInstanceCommandInput - {@link CreateInstanceCommandInput}
 * @returns {@link CreateInstanceCommandOutput}
 * @see {@link CreateInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 * @public
 */
export class CreateInstanceCommand extends $Command
  .classBuilder<
    CreateInstanceCommandInput,
    CreateInstanceCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GalaxyPublicAPIGateway", "CreateInstance", {})
  .n("SupplyChainClient", "CreateInstanceCommand")
  .f(void 0, void 0)
  .ser(se_CreateInstanceCommand)
  .de(de_CreateInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInstanceRequest;
      output: CreateInstanceResponse;
    };
    sdk: {
      input: CreateInstanceCommandInput;
      output: CreateInstanceCommandOutput;
    };
  };
}
