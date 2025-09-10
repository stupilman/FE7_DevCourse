{
  // 1.
  const enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Day): string {
    if (day === Day.MONDAY) return "Monday";
    if (day === Day.TUESDAY) return "Tuesday";
    if (day === Day.WEDNESDAY) return "Wednesday";
    if (day === Day.THURSDAY) return "Thursday";
    if (day === Day.FRIDAY) return "Friday";
    if (day === Day.SATURDAY) return "Saturday";
    if (day === Day.SUNDAY) return "Sunday";
    return "Invalid day";
  }
}
{
  // 2.
  const enum HttpStatus {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: HttpStatus): string {
    if (status === HttpStatus.SUCCESS) return "Success";
    if (status === HttpStatus.NOT_FOUND) return "Not Found";
    if (status === HttpStatus.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}
{
  // 3.
  const enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: City): string {
    if (zip === City.SEOUL) return City.SEOUL;
    if (zip === City.BUSAN) return City.BUSAN;
    if (zip === City.DAEGU) return City.DAEGU;
    return "Unknown City";
  }
}
{
  // 4.
  const enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: Role): string {
    if (role === Role.ADMIN) return "Full access";
    if (role === Role.USER) return "Limited access";
    if (role === Role.GUEST) return "Guest access";
    return "No access";
  }
}
{
  // 5.
  const enum ProductStatus {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: ProductStatus): string {
    if (status === ProductStatus.PENDING) return "Pending";
    if (status === ProductStatus.SHIPPED) return "Shipped";
    if (status === ProductStatus.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}
{
  // 6.
  const enum OrderStatus {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: OrderStatus): string {
    if (status === OrderStatus.ORDER_PLACED)
      return "Your order has been placed.";
    if (status === OrderStatus.PAYMENT_PENDING) return "Payment is pending.";
    if (status === OrderStatus.SHIPPED) return "Your order has been shipped.";
    if (status === OrderStatus.DELIVERED)
      return "Your order has been delivered.";
    return "Unknown Status";
  }
}
{
  // 7.
  const enum Status {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }
  function toggleStatus(status: Status): boolean {
    return status === Status.IS_ACTIVE ? true : false;
  }
}
{
  // 8.
  const enum Options {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: Options): string {
    if (option === Options.OPTION_ONE) return "You selected Option 1.";
    if (option === Options.OPTION_TWO) return "You selected Option 2.";
    if (option === Options.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}
{
  // 9.
  const enum Meals {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: Meals): string {
    if (meal === Meals.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meals.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meals.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}
{
  // 10.
  const enum LoginStatus {
    LOGGED_IN = 1,
    LOGGED_OUT = 0,
  }

  function checkLoginStatus(status: LoginStatus): string {
    if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
    if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
{
  const LoginStatus = {
    LOGGED_IN: "LOGGED_IN",
    LOGGED_OUT: "LOGGED_OUT",
  } as const;

  type LoginStatus = (typeof LoginStatus)[keyof typeof LoginStatus];

  function checkLoginStatus(status: LoginStatus): string {
    if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
    if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
