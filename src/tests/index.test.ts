import { AirGateway } from "../index";
import dotenv from "dotenv";
import { OrderPDFPayload } from "../types/OrderPDF";
import { CreateTaskPayload } from "../types/CreateTask";
import { OrderCommentsPayload } from "../types/OrderComments";
import { OrderExportPayload } from "../types/OrderExport";
import { OrderRemarksPayload } from "../types/OrderRemarks";
import { OfferPricePayload } from "../types/OfferPrice";
import { OrderCancelPayload } from "../types/OrderCancel";
import { AirDocIssuePayload } from "../types/AirDocIssue";
import { OrderRetrievePayload } from "../types/OrderRetrieve";
import { OrderCreatePayload } from "../types/OrderCreate";
import { OrderChangePayload } from "../types/OrderChange";
import { PaymentInfoPayload } from "../types/PaymentInfo";
import { OrderNotificationSeenTogglePayload } from "../types/OrderNotificationToggle";
import { OrderReshopRepricePayload } from "../types/OrderReshopReprice";
import { OrderReshopPayload } from "../types/OrderReshop";
import { OrderReshopRefundPayload } from "../types/OrderReshopRefund";
import { OrderUpdatePayload } from "../types/OrderUpdate";
import { SeatAvailabilityPayload } from "../types/SeatAvailability";
import { ServiceListPayload } from "../types/ServiceList";
import { AirShoppingPayload } from "../types/AirShopping";

dotenv.config();

const token = process.env.AIRGATEWAY_TOKEN;
const basePath = process.env.BASE_PATH;

if (!token) {
    throw new Error("AIRGATEWAY_TOKEN is not set in environment variables");
}

if (!basePath) {
    throw new Error("BASE_PATH is not set in environment variables");
}

// Initialize the AirGateway client
const airGateway = new AirGateway(token, basePath);

describe("API Integration Tests", () => {
    // Non NDC Methods

    // GET endpoints

    test("should fetch real API status", async () => {
        try {
            const result = await airGateway.getStatus();
            console.log("Real API Status:", result);

            expect(result.status).toBeDefined();
            expect(typeof result.status).toBe("string");
        } catch (error) {
            console.error("Error fetching API status:", error);
            throw error;
        }
    });

    test("should fetch provider list", async () => {
        try {
            const result = await airGateway.getProviderList();
            console.log("Provider List:", result);

            expect(result.providers).toBeDefined();
            expect(Array.isArray(result.providers)).toBe(true);
        } catch (error) {
            console.error("Error fetching provider list:", error);
            throw error;
        }
    });

    test("should fetch agency presets", async () => {
        try {
            const result = await airGateway.getAgencyPresets();
            console.log("Agency Presets:", result);

            expect(result.presets).toBeDefined();
            expect(Array.isArray(result.presets)).toBe(true);
        } catch (error) {
            console.error("Error fetching agency presets:", error);
            throw error;
        }
    });

    test("should fetch order list", async () => {
        try {
            const result = await airGateway.getOrderList({
                agency: "airgateway",
                page: "1",
                pageSize: "10",
            });
            console.log("Order List:", result);

            expect(result.orders).toBeDefined();
            expect(Array.isArray(result.orders)).toBe(true);
            expect(result.orders.length).toBeGreaterThan(0); // assuming there are orders
            expect(result.count).toBeDefined();
            expect(typeof result.count).toBe("number");
        } catch (error) {
            console.error("Error fetching order list:", error);
            throw error;
        }
    });

    test("should generate PDF and return download URL", async () => {
        const payload: OrderPDFPayload = {
            id: "AGW-1KR9AF40KG",
        };

        try {
            const result = await airGateway.sendOrderPDF(payload);

            console.log("OrderPDF Response:", result);

            expect(result).toBeDefined();
            expect(result.downloadURL).toBeDefined();
            expect(typeof result.downloadURL).toBe("string");
            expect(result.downloadURL).toMatch(/^https?:\/\//);
        } catch (error) {
            console.error("Error generating Order PDF:", error);
            throw error;
        }
    });

    test("should create a task and return a success response", async () => {
        const payload: CreateTaskPayload = {
            eventName: "GenerateAIR",
            orderID: "AGW-1KR9AF40KG",
        };

        try {
            const result = await airGateway.sendCreateTask(payload);

            console.log("CreateTask Response:", result);

            expect(result).toBeDefined();
            expect(result.ok).toBe(true); // Check that the response is successful
        } catch (error) {
            console.error("Error creating task:", error);
            throw error;
        }
    });

    test("should add order comments and return a success response", async () => {
        const payload: OrderCommentsPayload = {
            id: "AGW-1KR9AF40KG",
            comments: "Some text comments",
        };

        try {
            const result = await airGateway.sendOrderComments(payload);

            console.log("Order Comments Response:", result);

            expect(result).toBeDefined();
            expect(result.ok).toBe(true); // Check that the response is successful
        } catch (error) {
            console.error("Error adding order comments:", error);
            throw error;
        }
    });

    test("should export order and send files to emails", async () => {
        const payload: OrderExportPayload = {
            issuingDateFrom: "2025-03-01",
            issuingDateTo: "2023-03-26",
            recipientEmails: ["vitalii@airgateway.com"],
        };

        try {
            const result = await airGateway.sendOrderExport(payload);
            console.log("Order Export result:", result);

            // Check if the response is successful
            expect(result.ok).toBe(true);
        } catch (error) {
            console.error("Error exporting order:", error);
            throw error;
        }
    });

    test("should submit order remarks and return the generated text", async () => {
        const payload: OrderRemarksPayload = {
            data: {
                name: "RemarkOnlyAccount",
                template: "AC: {account-id:account-id}",
                variables: {
                    "account-id": "",
                },
            },
            id: "AGW-488UR7216W",
            result: "AC: \n",
        };

        try {
            const result = await airGateway.sendOrderRemarks(payload);
            console.log("Order Remarks result:", result);

            // Check if the response is successful
            expect(result.ok).toBe(true);
        } catch (error) {
            console.error("Error submitting order remarks:", error);
            throw error;
        }
    });

    // NDC Methods

    // POST endpoints

    test("should retrieve detailed pricing information for a flight offer", async () => {
        const payload: OfferPricePayload = {
            offerID:
                "OFFER-QUY6T1c6RlJBOk1BRDoyMDI1LTA0LTIzOjAwMDAwMDAwOjE3NS43NzoyMDI1MDMyOFQxNTAyMDE6YmMyZWFmYWYwOWNlNDMxOTkxZDVhNzhjZjNiYWI3Y2I6U0ExSEREVjhYUjFGUVlUSVlHSjJBMjhOMlNGNlNQT1BBR01OUlZWR0pYMTI3TUY4WlJPUVhPT0pBU1hMVDhMMDpmYWxzZQ",
        };

        try {
            const result = await airGateway.sendOfferPrice(payload);
            console.log("Offer Price result:", result);

            // Check if the response is successful and validate expected fields
            expect(result).toBeDefined();
            expect(result.price).toBeDefined(); // Check if price details are included in the response
            expect(result.price.consumer.total).toBeGreaterThan(0); // Validate total price is a positive value
        } catch (error) {
            console.error("Error retrieving offer price:", error);
            throw error;
        }
    });

    test("should cancel an order and return the canceled order details", async () => {
        const payload: OrderCancelPayload = {
            id: "AGW-123",
            type: "void",
        };

        try {
            const result = await airGateway.sendOrderCancel(payload);
            console.log("Order Cancel result:", result);

            // Check if the response is defined and contains expected fields
            expect(result).toBeDefined();
            expect(result.orderID).toBeDefined(); // Validate that the order ID is returned
            expect(result.trace).toBeDefined(); // Ensure trace information is included

            // Check if warnings exist, and if so, validate their structure
            if (result.warnings) {
                expect(Array.isArray(result.warnings)).toBe(true);
                expect(result.warnings.length).toBeGreaterThanOrEqual(0);
            }
        } catch (error) {
            console.error("Error canceling order:", error);
            throw error;
        }
    });

    test("should issue an air document successfully", async () => {
        const payload: AirDocIssuePayload = {
            id: "AGW-B7Z6BLXLYM",
            payment: {
                method: "agencyCash",
            },
        };

        try {
            const result = await airGateway.sendAirDocIssue(payload);
            console.log("AirDocIssue result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error issuing air document:", error);
            throw error;
        }
    });

    test("should create an order successfully", async () => {
        const payload: OrderCreatePayload = {
            shoppingResponseID: "KKC1XLDPIM0BGOGBB9KFCF081STQ5N3FTUCC8ZS3IPEHJ0026ZWF5VQC3S9CN5J5",
            passengers: [
                {
                    documents: [
                        {
                            documentID: "888955664A",
                            documentType: "PP",
                            expirationDate: "2027-08-18",
                            fiscalName: "",
                            issuingCountryCode: "SR",
                            citizenshipCountryCode: "GS",
                            residenceCountryCode: "PS",
                            token: "",
                        },
                    ],
                    passengerType: "ADT",
                    data: {
                        birthdate: "1978-10-04",
                        email: "tatyana-mann@airgateway.net",
                        fqtvInfo: {
                            account: {
                                number: "",
                            },
                            airlineID: "",
                        },
                        title: "MR",
                        gender: "Female",
                        name: "Tatyana",
                        surname: "Mann",
                        phone: "+34967874336",
                        address: {
                            label: "addressAtHome",
                            countryCode: "ES",
                            cityName: "Rosemead",
                            postalCode: "81705-9276",
                            street: "Rau Stream",
                        },
                    },
                    travelerReference: "ADT0",
                },
            ],
            corporateID: "",
            loyaltyProgramAccount: "",
            metas: {},
            payment: {
                method: "agencyCash",
            },
        };

        try {
            const result = await airGateway.sendOrderCreate(payload);
            console.log("OrderCreate result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    });

    test("should retrieve an order successfully (cached mode)", async () => {
        const payload: OrderRetrievePayload = {
            id: "AGW-B7Z6BLXLYM",
        };

        try {
            const result = await airGateway.sendOrderRetrieve(payload, "cached");
            console.log("OrderRetrieve result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error retrieving order:", error);
            throw error;
        }
    });

    test("should retrieve an order successfully (airline mode)", async () => {
        const payload: OrderRetrievePayload = {
            id: "AGW-B7Z6BLXLYM",
        };

        try {
            const result = await airGateway.sendOrderRetrieve(payload, "airline");
            console.log("OrderRetrieve (airline mode) result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error retrieving order in airline mode:", error);
            throw error;
        }
    });

    test("should change an order successfully", async () => {
        const payload: OrderChangePayload = {
            id: "AGW-B7Z6BLXLYM",
            payment: {
                method: "agencyCash",
            },
            services: [
                {
                    type: "service",
                    serviceID: "SRV6",
                    segmentReference: "SEG1 SEG7",
                    travelerReference: "PAX1",
                    quantity: 1,
                    action: "Create",
                },
            ],
            passengers: [
                {
                    data: {
                        address: {
                            cityName: "",
                            countryCode: "",
                            postalCode: "",
                            street: "",
                        },
                        birthdate: "1998-09-27",
                        email: "ZARIA-WINDLER@AIRGATEWAY.NET",
                        gender: "Female",
                        name: "ZARIA",
                        phone: "34910541061",
                        surname: "WINDLER",
                        title: "MS",
                    },
                    infantReference: "",
                    passengerType: "ADT",
                    travelerReference: "PAX1",
                },
            ],
        };

        try {
            const result = await airGateway.sendOrderChange(payload);
            console.log("OrderChange result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error changing the order:", error);
            throw error;
        }
    });

    test("should process payment info successfully", async () => {
        const payload: PaymentInfoPayload = {
            payment: {
                method: "agencyCash",
            },
            type: "pay_ancillaries_on_orderchange",
            id: "AGW-B7Z6BLXLYM",
            services: [
                {
                    type: "service",
                    serviceID: "SRV3",
                    segmentReference: "SEG1 SEG7",
                    travelerReference: "PAX1",
                    quantity: 1,
                    action: "Create",
                },
            ],
        };

        try {
            const result = await airGateway.sendPaymentInfo(payload);
            console.log("PaymentInfo result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error processing payment info:", error);
            throw error;
        }
    });

    test("should toggle order notification seen status successfully", async () => {
        const payload: OrderNotificationSeenTogglePayload = {
            id: "AGW-JHTE1543KJ",
            notificationIds: [3774],
        };

        try {
            const result = await airGateway.sendOrderNotificationSeenToggle(payload);
            console.log("OrderNotificationToggle result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error toggling order notification status:", error);
            throw error;
        }
    });

    test("should reprice an order reshop offer successfully", async () => {
        const payload: OrderReshopRepricePayload = {
            id: "AGW-PJ5W2GAOCR",
            // "date": "2025-04-01",
            offerID: "OFFER-JUZ9TC8HA69GUBV1OWVNAGIAEYNYDNAMMW9R75J6U2EFKR736SNHYLXC8CXW861I",
        };

        try {
            const result = await airGateway.sendOrderReshopReprice(payload);
            console.log("OrderReshopReprice result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error repricing order reshop offer:", error);
            throw error;
        }
    });

    test("should retrieve reshop offers successfully", async () => {
        const payload: OrderReshopPayload = {
            id: "AGW-XJ1U44MIA6",
            originDestinations: [
                {
                    departure: {
                        airportCode: "FRA",
                        time: "",
                        date: "2025-06-10",
                    },
                    arrival: {
                        airportCode: "JFK",
                        date: "2025-06-10",
                        time: "",
                    },
                },
            ],
        };

        try {
            const result = await airGateway.sendOrderReshop(payload);
            console.log("OrderReshop result:", result);

            // Validate the response
            expect(result).toBeDefined();
            expect(result.offers).toBeInstanceOf(Array);
        } catch (error) {
            console.error("Error retrieving order reshop offers:", error);
            throw error;
        }
    });

    test("should process order reshop refund successfully", async () => {
        const payload: OrderReshopRefundPayload = {
            id: "AGW-JHTE1543KJ",
        };

        try {
            const result = await airGateway.sendOrderReshopRefund(payload);
            console.log("OrderReshopRefund result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error processing order reshop refund:", error);
            throw error;
        }
    });

    test("should process order update successfully", async () => {
        const payload: OrderUpdatePayload = {
            action: "pax_info_correction",
            id: "AGW-JHTE1543KJ",
            passengerUpdate: {
                data: {
                    address: {
                        cityName: "",
                        countryCode: "",
                        postalCode: "",
                        street: "",
                    },
                    birthdate: "1998-09-27",
                    email: "ZARIA-WINDLER@AIRGATEWAY.NET",
                    gender: "Female",
                    name: "ZARIA",
                    phone: "34910541061",
                    surname: "WINDLER",
                    title: "MS",
                },
                infantReference: "",
                passengerType: "ADT",
                travelerReference: "PAX1",
            },
        };

        try {
            const result = await airGateway.sendOrderUpdate(payload);
            console.log("OrderUpdate result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error processing order update:", error);
            throw error;
        }
    });

    test("should retrieve seat availability successfully", async () => {
        const payload: SeatAvailabilityPayload = {
            id: "AGW-XJ1U44MIA6",
            passengers: [
                {
                    travelerReference: "T2",
                },
                {
                    travelerReference: "T1",
                },
                {
                    travelerReference: "T2.1",
                },
            ],
        };

        try {
            const result = await airGateway.sendSeatAvailability(payload);
            console.log("SeatAvailability result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error retrieving seat availability:", error);
            throw error;
        }
    });

    test("should retrieve service list successfully", async () => {
        const payload: ServiceListPayload = {
            id: "AGW-XJ1U44MIA6",
            passengers: [
                {
                    travelerReference: "T2",
                },
                {
                    travelerReference: "T1",
                },
                {
                    travelerReference: "T2.1",
                },
            ],
        };

        try {
            const result = await airGateway.sendServiceList(payload);
            console.log("ServiceList result:", result);

            // Validate the response
            expect(result).toBeDefined();
            expect(result.services).toBeInstanceOf(Array);
            expect(result.services.length).toBeGreaterThan(0);
        } catch (error) {
            console.error("Error retrieving service list:", error);
            throw error;
        }
    });

    test("should retrieve flight offers successfully", async () => {
        const payload: AirShoppingPayload = {
            metadata: {
                country: "DE",
                currency: "EUR",
                locale: "de_DE",
            },
            originDestinations: [
                {
                    departure: {
                        airportCode: "FRA",
                        date: "2025-04-20",
                        time: "",
                        terminalName: "",
                    },
                    arrival: {
                        airportCode: "MAD",
                        time: "",
                        terminalName: "",
                    },
                },
            ],
            preferences: {
                maxStops: [10],
                cabin: ["7"],
                checkedBaggageIncluded: false,
            },
            passengers: [
                {
                    travelerReference: "ADT0",
                    passengerType: "ADT",
                },
            ],
        };

        try {
            const result = await airGateway.sendAirShopping(payload, "*", 30, "cheapest_flights");
            console.log("AirShopping result:", result);

            // Validate the response
            expect(result).toBeDefined();
        } catch (error) {
            console.error("Error retrieving flight offers:", error);
            throw error;
        }
    });
});
