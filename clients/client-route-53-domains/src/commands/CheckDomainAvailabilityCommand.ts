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

import { CheckDomainAvailabilityRequest, CheckDomainAvailabilityResponse } from "../models/models_0";
import { de_CheckDomainAvailabilityCommand, se_CheckDomainAvailabilityCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CheckDomainAvailabilityCommand}.
 */
export interface CheckDomainAvailabilityCommandInput extends CheckDomainAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link CheckDomainAvailabilityCommand}.
 */
export interface CheckDomainAvailabilityCommandOutput extends CheckDomainAvailabilityResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation checks the availability of one domain name. Note that if the
 * 			availability status of a domain is pending, you must submit another request to determine
 * 			the availability of the domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CheckDomainAvailabilityCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CheckDomainAvailabilityCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // CheckDomainAvailabilityRequest
 *   DomainName: "STRING_VALUE", // required
 *   IdnLangCode: "STRING_VALUE",
 * };
 * const command = new CheckDomainAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // CheckDomainAvailabilityResponse
 * //   Availability: "AVAILABLE" || "AVAILABLE_RESERVED" || "AVAILABLE_PREORDER" || "UNAVAILABLE" || "UNAVAILABLE_PREMIUM" || "UNAVAILABLE_RESTRICTED" || "RESERVED" || "DONT_KNOW",
 * // };
 *
 * ```
 *
 * @param CheckDomainAvailabilityCommandInput - {@link CheckDomainAvailabilityCommandInput}
 * @returns {@link CheckDomainAvailabilityCommandOutput}
 * @see {@link CheckDomainAvailabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDomainAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 */
export class CheckDomainAvailabilityCommand extends $Command<
  CheckDomainAvailabilityCommandInput,
  CheckDomainAvailabilityCommandOutput,
  Route53DomainsClientResolvedConfig
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
  constructor(readonly input: CheckDomainAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckDomainAvailabilityCommandInput, CheckDomainAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckDomainAvailabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CheckDomainAvailabilityCommand";
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
  private serialize(input: CheckDomainAvailabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CheckDomainAvailabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckDomainAvailabilityCommandOutput> {
    return de_CheckDomainAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
