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

import { RegisterDevicesRequest } from "../models/models_2";
import {
  deserializeAws_json1_1RegisterDevicesCommand,
  serializeAws_json1_1RegisterDevicesCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface RegisterDevicesCommandInput extends RegisterDevicesRequest {}
export interface RegisterDevicesCommandOutput extends __MetadataBearer {}

/**
 * <p>Register devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RegisterDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RegisterDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new RegisterDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDevicesCommandInput} for command's `input` shape.
 * @see {@link RegisterDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class RegisterDevicesCommand extends $Command<
  RegisterDevicesCommandInput,
  RegisterDevicesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterDevicesCommandInput, RegisterDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "RegisterDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDevicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterDevicesCommandOutput> {
    return deserializeAws_json1_1RegisterDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
