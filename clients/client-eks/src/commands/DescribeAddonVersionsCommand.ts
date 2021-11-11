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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeAddonVersionsRequest, DescribeAddonVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAddonVersionsCommand,
  serializeAws_restJson1DescribeAddonVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAddonVersionsCommandInput extends DescribeAddonVersionsRequest {}
export interface DescribeAddonVersionsCommandOutput extends DescribeAddonVersionsResponse, __MetadataBearer {}

/**
 * <p>Describes the Kubernetes versions that the add-on can be used with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonVersionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonVersionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeAddonVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddonVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonVersionsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class DescribeAddonVersionsCommand extends $Command<
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAddonVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAddonVersionsCommandInput, DescribeAddonVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeAddonVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAddonVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAddonVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAddonVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAddonVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddonVersionsCommandOutput> {
    return deserializeAws_restJson1DescribeAddonVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
