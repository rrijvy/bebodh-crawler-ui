export enum InstallerType {
  WINDOWS,
  MAC,
  LINUX,
}

export enum EnumOrderTableMode {
  PO = "PO",
  Flat = "Flat",
}

export enum EnumOrderTab {
  OPEN = "OPEN",
  SHIPPED = "SHIPPED",
}

export enum DetailDrawerType {
  LineDetails = "LINE_ORDER_DETAILS",
  Po = "PURCHASE_ORDER",
  AdvancedFilters = "ADVANCED_FILTERS",
  UpdateManager = "UPDATE_MANAGER",
  LineItems = "LINE_ITEMS",
  DashboardSurpplierStatus = "DASHBOARD_SURPPLIER_STATUS",
  DashboardActivities = "DASHBOARD_ACTIVITIES",
  UserDetails = "USER_DETAILS",
  Notifications = "NOTIFICATIONS",
  InviteCustomerUsers = "INVITE_CUSTOMER_USER",
  InviteSupplierUsers = "INVITE_SUPPLIER_USER",
  DiscussionSingleThread = "DISCUSSION_SINGLE_THREAD",
  FileManagerPreview = "FILE_MANAGER_PREVIEW",
  FileManagerDetails = "FILE_MANAGER_DETAILS",
  NewPO = "NEW_PO",
  OrderEditorMobile = "ORDER_EDITOR_MOBILE",
}

export enum LineItemActivityTimeFilterType {
  D30 = "30 Days",
  D90 = "90 Days",
  M6 = "6 Months",
  Y1 = "1 Year",
  All = "All Time",
}

export enum EnumStakeHolder {
  Customer = "CUSTOMER",
  Supplier = "SUPPLIER",
}

export enum EnumIssueFlag {
  NotDefined = "NOTDEFINED",
  ManualOff = "MANUALOFF",
  ManualOn = "MANUALON",
}

export enum EnumCarrierName {
  NOCARRIER = "",
  USPS = "USPS",
  TFORCE = "T-Force (used to be UPS Freight)",
  OLDDOMINION = "Old Dominion",
  PENNMOTOR = "New Penn Motor Express",
}

export enum EnumShippedFlowStep {
  NoSelection = 0,
  TrackingInfoSelection = 1,
  CarrierTypeSelection = 2,
  CarrierInfoSelection = 3,
  FileUploaderView = 4,
  FinalInfoSelection = 5,
}

export enum EnumDiscussionType {
  PO = "PO",
  LINEITEM = "LINEITEM",
}

export enum OrderManagementPoStatus {
  None = "NONE",
  NewPo = "NEWPO",
  NewTermProposedByCustomer = "NEWTERMPROPOSEDBYCUSTOMER",
  NewTermProposedBySupplier = "NEWTERMPROPOSEDBYSUPPLIER",
  NewTermRejectedByCustomer = "NEWTERMREJECTEDBYCUSTOMER",
  NewTermRejectedBySupplier = "NEWTERMREJECTEDBYSUPPLIER",
  OrderDeclined = "ORDERDECLINED",
  Complete = "COMPLETE",
}

export enum EnumRenderingDeviceType {
  ExtraSmall = "DEVICE_SCREEN_EXTRA_SMALL",
  Small = "DEVICE_SCREEN_SMALL",
  Medium = "DEVICE_SCREEN_MEDIUM",
  Large = "DEVICE_SCREEN_LARGE",
  ExtraLarge = "DEVICE_SCREEN_EXTRA_LARGE",
}

export enum EnumPasswordValidationError {
  PROFIL_DATA = "PROFIL_DATA",
  MAX = "EXCEED_MAX",
  MIN = "MIN",
  DISALLOWED_WORDS = "DISALLOWED_WORDS",
  SEQUENCIAL_CHARS = "SEQUENCIAL_CHARS",
  REPEATED_CHARS = "REPEATED_CHARS",
  EXAMPLE_USED = "EXAMPLE_USED",
}

export enum SortOrder {
  Ascending = "asce",
  Descending = "desc",
  None = "none",
}

export enum EnumLoginState {
  LoggedIn = "LOGGED_IN",
  LoggedOut = "LOGGED_OUT",
  Pending = "PENDING",
}

export enum ThunkOperation {
  Local = "THUNK_LOCAL_MUTAION",
  Progress = "THUNK_NETWORK_PROGRESS",
  Network = "THUNK_NETWORK_FETCH",
  ForceNetwork = "THUNK_FORCE_NETWORK_FETCH",
}

export enum EnumDiscussionReactionType {
  Like = "Like",
  Read = "Read",
  UnLike = "UnLike",
}

export enum DiscussionType {
  PO = "PO",
  LINEITEM = "LINEITEM",
}

export enum OrderDateFilterType {
  ON = "ON",
  AFTER = "AFTER",
  BEFORE = "BEFORE",
  RANGE = "RANGE",
}

export enum EnumSortDate {
  Ascending = "SORT_ASCENDING",
  Descending = "SORT_DESCENDING",
  Value = "SORT_BY_VALUE",
}
