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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSubnetsRequest, DescribeSubnetsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSubnetsCommand, serializeAws_ec2DescribeSubnetsCommand } from "../protocols/Aws_ec2";

export interface DescribeSubnetsCommandInput extends DescribeSubnetsRequest {}
export interface DescribeSubnetsCommandOutput extends DescribeSubnetsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your subnets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and subnets</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSubnetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSubnetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubnetsCommandInput} for command's `input` shape.
 * @see {@link DescribeSubnetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeSubnetsCommand extends $Command<
  DescribeSubnetsCommandInput,
  DescribeSubnetsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSubnetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSubnetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSubnetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSubnetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSubnetsCommandOutput> {
    return deserializeAws_ec2DescribeSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
