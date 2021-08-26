initSidebarItems({"derive":[["RequestPermissions","Implements the `VariantPermission` for struct/ unions with PermissionValue(1). For enums, it creates an analogous new enum Permission with Unit variants, and implements `VariantPermission` by assigning different `PermissionValue` for each variant. The permission value is the “index” in the enum as exponent for the power of 2, thus from top to bottom 1, 2, 4, 8… Additionally, it implements `Borrow` from the new original enum to the new enum, to satisfy the trait bounds of `StrongholdP2p`."]],"enum":[["FirewallRequest","Requests for approval and rules that are not covered by the current [`FirewallConfiguration`]."],["Rule","Rules for requests in a specific [`RequestDirection`]."],["RuleDirection","The direction for which a rule is applicable."]],"struct":[["FirewallConfiguration","Configuration for the firewall of the `NetBehaviour`. This config specifies what inbound and requests from/ to which peer are allowed. If there are neither default rules, nor a peer specific rule for a request from/ to a peer, a [`FirewallRequest::PeerSpecificRule`] will be sent through the firewall-channel that is passed to `StrongholdP2p`."],["FirewallPermission","The sum of allowed  [`PermissionValue`]s. This is realized as different bits set in the integer, analogous to file permissions in Unix."],["FirewallRules","Rule configuration for inbound and outbound requests."],["PermissionValue","The permission value for request variants. This is realized as a bit set at a certain index, hence the value is always a power of 2."]],"trait":[["VariantPermission","The permission value for the different variants of an enum. This allows permitting specific variants of an enum while prohibiting others. In structs or unions, it should default to [`PermissionValue(1)`]."]]});