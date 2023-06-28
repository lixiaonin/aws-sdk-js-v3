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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteGatewayRouteInput, DeleteGatewayRouteOutput } from "../models/models_0";
import { de_DeleteGatewayRouteCommand, se_DeleteGatewayRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteGatewayRouteCommand}.
 */
export interface DeleteGatewayRouteCommandInput extends DeleteGatewayRouteInput {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayRouteCommand}.
 */
export interface DeleteGatewayRouteCommandOutput extends DeleteGatewayRouteOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an existing gateway route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // DeleteGatewayRouteInput
 *   gatewayRouteName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   virtualGatewayName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new DeleteGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGatewayRouteOutput
 * //   gatewayRoute: { // GatewayRouteData
 * //     meshName: "STRING_VALUE", // required
 * //     gatewayRouteName: "STRING_VALUE", // required
 * //     virtualGatewayName: "STRING_VALUE", // required
 * //     spec: { // GatewayRouteSpec
 * //       priority: Number("int"),
 * //       httpRoute: { // HttpGatewayRoute
 * //         match: { // HttpGatewayRouteMatch
 * //           prefix: "STRING_VALUE",
 * //           path: { // HttpPathMatch
 * //             exact: "STRING_VALUE",
 * //             regex: "STRING_VALUE",
 * //           },
 * //           queryParameters: [ // HttpQueryParameters
 * //             { // HttpQueryParameter
 * //               name: "STRING_VALUE", // required
 * //               match: { // QueryParameterMatch
 * //                 exact: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           method: "STRING_VALUE",
 * //           hostname: { // GatewayRouteHostnameMatch
 * //             exact: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
 * //           headers: [ // HttpGatewayRouteHeaders
 * //             { // HttpGatewayRouteHeader
 * //               name: "STRING_VALUE", // required
 * //               invert: true || false,
 * //               match: { // HeaderMatchMethod Union: only one key present
 * //                 exact: "STRING_VALUE",
 * //                 regex: "STRING_VALUE",
 * //                 range: { // MatchRange
 * //                   start: Number("long"), // required
 * //                   end: Number("long"), // required
 * //                 },
 * //                 prefix: "STRING_VALUE",
 * //                 suffix: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           port: Number("int"),
 * //         },
 * //         action: { // HttpGatewayRouteAction
 * //           target: { // GatewayRouteTarget
 * //             virtualService: { // GatewayRouteVirtualService
 * //               virtualServiceName: "STRING_VALUE", // required
 * //             },
 * //             port: Number("int"),
 * //           },
 * //           rewrite: { // HttpGatewayRouteRewrite
 * //             prefix: { // HttpGatewayRoutePrefixRewrite
 * //               defaultPrefix: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             path: { // HttpGatewayRoutePathRewrite
 * //               exact: "STRING_VALUE",
 * //             },
 * //             hostname: { // GatewayRouteHostnameRewrite
 * //               defaultTargetHostname: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       http2Route: {
 * //         match: {
 * //           prefix: "STRING_VALUE",
 * //           path: {
 * //             exact: "STRING_VALUE",
 * //             regex: "STRING_VALUE",
 * //           },
 * //           queryParameters: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               match: {
 * //                 exact: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           method: "STRING_VALUE",
 * //           hostname: {
 * //             exact: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
 * //           headers: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               invert: true || false,
 * //               match: {//  Union: only one key present
 * //                 exact: "STRING_VALUE",
 * //                 regex: "STRING_VALUE",
 * //                 range: {
 * //                   start: Number("long"), // required
 * //                   end: Number("long"), // required
 * //                 },
 * //                 prefix: "STRING_VALUE",
 * //                 suffix: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           port: Number("int"),
 * //         },
 * //         action: {
 * //           target: {
 * //             virtualService: {
 * //               virtualServiceName: "STRING_VALUE", // required
 * //             },
 * //             port: Number("int"),
 * //           },
 * //           rewrite: {
 * //             prefix: {
 * //               defaultPrefix: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             path: {
 * //               exact: "STRING_VALUE",
 * //             },
 * //             hostname: {
 * //               defaultTargetHostname: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       grpcRoute: { // GrpcGatewayRoute
 * //         match: { // GrpcGatewayRouteMatch
 * //           serviceName: "STRING_VALUE",
 * //           hostname: {
 * //             exact: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
 * //           metadata: [ // GrpcGatewayRouteMetadataList
 * //             { // GrpcGatewayRouteMetadata
 * //               name: "STRING_VALUE", // required
 * //               invert: true || false,
 * //               match: { // GrpcMetadataMatchMethod Union: only one key present
 * //                 exact: "STRING_VALUE",
 * //                 regex: "STRING_VALUE",
 * //                 range: {
 * //                   start: Number("long"), // required
 * //                   end: Number("long"), // required
 * //                 },
 * //                 prefix: "STRING_VALUE",
 * //                 suffix: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           port: Number("int"),
 * //         },
 * //         action: { // GrpcGatewayRouteAction
 * //           target: {
 * //             virtualService: {
 * //               virtualServiceName: "STRING_VALUE", // required
 * //             },
 * //             port: Number("int"),
 * //           },
 * //           rewrite: { // GrpcGatewayRouteRewrite
 * //             hostname: {
 * //               defaultTargetHostname: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // GatewayRouteStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteGatewayRouteCommandInput - {@link DeleteGatewayRouteCommandInput}
 * @returns {@link DeleteGatewayRouteCommandOutput}
 * @see {@link DeleteGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 */
export class DeleteGatewayRouteCommand extends $Command<
  DeleteGatewayRouteCommandInput,
  DeleteGatewayRouteCommandOutput,
  AppMeshClientResolvedConfig
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
  constructor(readonly input: DeleteGatewayRouteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGatewayRouteCommandInput, DeleteGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGatewayRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DeleteGatewayRouteCommand";
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
  private serialize(input: DeleteGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteGatewayRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGatewayRouteCommandOutput> {
    return de_DeleteGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
