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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListFindingsRequest, ListFindingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFindingsCommand,
  serializeAws_restJson1ListFindingsCommand,
} from "../protocols/Aws_restJson1";

export interface ListFindingsCommandInput extends ListFindingsRequest {}
export interface ListFindingsCommandOutput extends ListFindingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of findings generated by the specified analyzer.</p>
 *          <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListFindingsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListFindingsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 */
export class ListFindingsCommand extends $Command<
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFindingsCommandInput, ListFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ListFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsCommandOutput> {
    return deserializeAws_restJson1ListFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
