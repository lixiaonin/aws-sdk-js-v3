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
import { ListExclusionsRequest, ListExclusionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListExclusionsCommand,
  serializeAws_json1_1ListExclusionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListExclusionsCommandInput extends ListExclusionsRequest {}
export interface ListExclusionsCommandOutput extends ListExclusionsResponse, __MetadataBearer {}

/**
 * <p>List exclusions that are generated by the assessment run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListExclusionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListExclusionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListExclusionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExclusionsCommandInput} for command's `input` shape.
 * @see {@link ListExclusionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class ListExclusionsCommand extends $Command<
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListExclusionsCommandInput) {
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
  ): Handler<ListExclusionsCommandInput, ListExclusionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListExclusionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExclusionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListExclusionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExclusionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListExclusionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExclusionsCommandOutput> {
    return deserializeAws_json1_1ListExclusionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
