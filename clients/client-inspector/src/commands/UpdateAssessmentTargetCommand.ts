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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UpdateAssessmentTargetRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAssessmentTargetCommand,
  serializeAws_json1_1UpdateAssessmentTargetCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateAssessmentTargetCommandInput extends UpdateAssessmentTargetRequest {}
export interface UpdateAssessmentTargetCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the assessment target that is specified by the ARN of the assessment
 *          target.</p>
 *          <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account
 *          and region are included in the assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UpdateAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UpdateAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new UpdateAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class UpdateAssessmentTargetCommand extends $Command<
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssessmentTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentTargetCommandInput, UpdateAssessmentTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "UpdateAssessmentTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssessmentTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAssessmentTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssessmentTargetCommandOutput> {
    return deserializeAws_json1_1UpdateAssessmentTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
