// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { UpdateUserProfileRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_UpdateUserProfileCommand, se_UpdateUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandInput extends UpdateUserProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates a specified user profile.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // UpdateUserProfileRequest
 *   IamUserArn: "STRING_VALUE", // required
 *   SshUsername: "STRING_VALUE",
 *   SshPublicKey: "STRING_VALUE",
 *   AllowSelfManagement: true || false,
 * };
 * const command = new UpdateUserProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserProfileCommandInput - {@link UpdateUserProfileCommandInput}
 * @returns {@link UpdateUserProfileCommandOutput}
 * @see {@link UpdateUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class UpdateUserProfileCommand extends $Command<
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateUserProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "UpdateUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateUserProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserProfileCommandOutput> {
    return de_UpdateUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
