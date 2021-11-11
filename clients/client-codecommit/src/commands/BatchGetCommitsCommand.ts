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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchGetCommitsInput, BatchGetCommitsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetCommitsCommand,
  serializeAws_json1_1BatchGetCommitsCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetCommitsCommandInput extends BatchGetCommitsInput {}
export interface BatchGetCommitsCommandOutput extends BatchGetCommitsOutput, __MetadataBearer {}

/**
 * <p>Returns information about the contents of one or more commits in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetCommitsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetCommitsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchGetCommitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetCommitsCommandInput} for command's `input` shape.
 * @see {@link BatchGetCommitsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class BatchGetCommitsCommand extends $Command<
  BatchGetCommitsCommandInput,
  BatchGetCommitsCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetCommitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "BatchGetCommitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetCommitsInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetCommitsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetCommitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetCommitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetCommitsCommandOutput> {
    return deserializeAws_json1_1BatchGetCommitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
