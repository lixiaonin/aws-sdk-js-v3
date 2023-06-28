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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerMetricDataRequest, GetLoadBalancerMetricDataResult } from "../models/models_1";
import { de_GetLoadBalancerMetricDataCommand, se_GetLoadBalancerMetricDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLoadBalancerMetricDataCommand}.
 */
export interface GetLoadBalancerMetricDataCommandInput extends GetLoadBalancerMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetLoadBalancerMetricDataCommand}.
 */
export interface GetLoadBalancerMetricDataCommandOutput extends GetLoadBalancerMetricDataResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about health metrics for your Lightsail load balancer.</p>
 *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
 *       Monitor and collect metric data regularly to maintain the reliability, availability, and
 *       performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetLoadBalancerMetricDataRequest
 *   loadBalancerName: "STRING_VALUE", // required
 *   metricName: "ClientTLSNegotiationErrorCount" || "HealthyHostCount" || "UnhealthyHostCount" || "HTTPCode_LB_4XX_Count" || "HTTPCode_LB_5XX_Count" || "HTTPCode_Instance_2XX_Count" || "HTTPCode_Instance_3XX_Count" || "HTTPCode_Instance_4XX_Count" || "HTTPCode_Instance_5XX_Count" || "InstanceResponseTime" || "RejectedConnectionCount" || "RequestCount", // required
 *   period: Number("int"), // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None", // required
 *   statistics: [ // MetricStatisticList // required
 *     "Minimum" || "Maximum" || "Sum" || "Average" || "SampleCount",
 *   ],
 * };
 * const command = new GetLoadBalancerMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetLoadBalancerMetricDataResult
 * //   metricName: "ClientTLSNegotiationErrorCount" || "HealthyHostCount" || "UnhealthyHostCount" || "HTTPCode_LB_4XX_Count" || "HTTPCode_LB_5XX_Count" || "HTTPCode_Instance_2XX_Count" || "HTTPCode_Instance_3XX_Count" || "HTTPCode_Instance_4XX_Count" || "HTTPCode_Instance_5XX_Count" || "InstanceResponseTime" || "RejectedConnectionCount" || "RequestCount",
 * //   metricData: [ // MetricDatapointList
 * //     { // MetricDatapoint
 * //       average: Number("double"),
 * //       maximum: Number("double"),
 * //       minimum: Number("double"),
 * //       sampleCount: Number("double"),
 * //       sum: Number("double"),
 * //       timestamp: new Date("TIMESTAMP"),
 * //       unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLoadBalancerMetricDataCommandInput - {@link GetLoadBalancerMetricDataCommandInput}
 * @returns {@link GetLoadBalancerMetricDataCommandOutput}
 * @see {@link GetLoadBalancerMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetLoadBalancerMetricDataCommand extends $Command<
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetLoadBalancerMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoadBalancerMetricDataCommandInput, GetLoadBalancerMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoadBalancerMetricDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetLoadBalancerMetricDataCommand";
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
  private serialize(input: GetLoadBalancerMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLoadBalancerMetricDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLoadBalancerMetricDataCommandOutput> {
    return de_GetLoadBalancerMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
