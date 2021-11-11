import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetSdkRequest, SdkResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSdkCommand, serializeAws_restJson1GetSdkCommand } from "../protocols/Aws_restJson1";

export interface GetSdkCommandInput extends GetSdkRequest {}
export interface GetSdkCommandOutput extends SdkResponse, __MetadataBearer {}

/**
 * <p>Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetSdkCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetSdkCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetSdkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSdkCommandInput} for command's `input` shape.
 * @see {@link GetSdkCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class GetSdkCommand extends $Command<GetSdkCommandInput, GetSdkCommandOutput, APIGatewayClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSdkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSdkCommandInput, GetSdkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetSdkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSdkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SdkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSdkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSdkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSdkCommandOutput> {
    return deserializeAws_restJson1GetSdkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
