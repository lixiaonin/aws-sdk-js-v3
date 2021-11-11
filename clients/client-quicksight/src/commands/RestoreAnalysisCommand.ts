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

import { RestoreAnalysisRequest, RestoreAnalysisResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RestoreAnalysisCommand,
  serializeAws_restJson1RestoreAnalysisCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface RestoreAnalysisCommandInput extends RestoreAnalysisRequest {}
export interface RestoreAnalysisCommandOutput extends RestoreAnalysisResponse, __MetadataBearer {}

/**
 * <p>Restores an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RestoreAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RestoreAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new RestoreAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreAnalysisCommandInput} for command's `input` shape.
 * @see {@link RestoreAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class RestoreAnalysisCommand extends $Command<
  RestoreAnalysisCommandInput,
  RestoreAnalysisCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "RestoreAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreAnalysisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RestoreAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreAnalysisCommandOutput> {
    return deserializeAws_restJson1RestoreAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
