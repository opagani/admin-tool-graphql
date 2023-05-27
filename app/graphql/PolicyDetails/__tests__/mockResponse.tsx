import type {
  PaymentChargeStatus,
  PaymentPayoutStatus,
  PolicyDetails,
  PremiumPaidBy,
} from '../../../../shared/generated-types/graphql';

const premiumPaidBy = 'PASSTHROUGH' as PremiumPaidBy;
const payoutStatus = 'PAID' as PaymentPayoutStatus;
const chargeStatus = 'SUCCEEDED' as PaymentChargeStatus;

export const mockPolicyDetailsResponse: Record<string, PolicyDetails> = {
  response: {
    policyId: '01F8R8PVRVHXHK7EKCZSHE58H3',
    isCancellable: true,
    isEligibleToReinstate: false,
    property: {
      listingAlias: '17utmw9aumkgc',
      street: '4943 Anza St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94121',
    },
    renters: [],
    applicationEligibility: {
      applicationId: '5465986684',
      applicationEligibilityStatus: 'eligible',
    },
    lease: {
      id: 12,
      monthlyRentUsd: 365400,
      startDate: new Date(1893456000000),
      endDate: new Date(1924992000000),
    },
    payments: {
      id: 11,
      termType: 'fixed-length',
      firstExpectedPaymentDate: {
        year: 2022,
        month: 3,
        day: 1,
      },
      finalExpectedPaymentDate: {
        year: 2023,
        month: 2,
        day: 1,
      },
      firstSuccessfulPaymentDate: null,
      mostRecentSuccessfulPaymentDate: null,
      rentTermsCancelledDate: null,
      daysDelinquent: 0,
    },
    policyStatus: 'Application Ineligible',
    landlords: [
      {
        firstName: 'Joe',
        lastName: 'Landlord',
        email: 'Irene_landlord@gmail.com',
        phone: '1231231234',
      },
    ],
    leaseLockBinder: {
      id: 'binder_01G5HRWBV2653Y3BEWZER6GV36',
      issueDate: { year: 2022, month: 6, day: 14 },
      effectiveDate: { year: 2022, month: 7, day: 1 },
      expirationDate: { year: 2022, month: 7, day: 31 },
      binderStatus: 'issued',
    },
    leaseLockCertificate: {
      id: 'certificate_01G5HRWBV2653Y3BEWZER6GV36',
      issueDate: { year: 2022, month: 7, day: 1 },
      effectiveDate: { year: 2022, month: 7, day: 1 },
      expirationDate: { year: 2023, month: 7, day: 31 },
      certificateStatus: 'issued',
    },
    quote: {
      quoteId: 9,
      premium: 4500,
      coverage: 500000,
      firstMonthStampingFee: 234,
      firstMonthSurplusLines: 225,
      firstMonthTotal: 4959,
      recurringMonthSurplusLines: 225,
      recurringMonthTotal: 4725,
    },
    premiumTransactions: [
      {
        transactionType: premiumPaidBy,
        transactionId: 'po_12345',
        chargeId: 'py_23456',
        premiumAmountInCents: 4739,
        payoutStatus: payoutStatus,
        chargeStatus: chargeStatus,
        transactionCreatedDate: {
          year: 2022,
          month: 10,
          day: 1,
        },
        transactionUpdatedDate: {
          year: 2022,
          month: 10,
          day: 1,
        },
        chargeDate: {
          date: {
            year: 2022,
            month: 10,
            day: 1,
          },
          time: {
            hour: 9,
            minute: 27,
            second: 5,
            nano: 0,
          },
        },
      },
      {
        transactionType: premiumPaidBy,
        transactionId: 'po_98765',
        chargeId: 'py_87654',
        premiumAmountInCents: 4739,
        payoutStatus: payoutStatus,
        chargeStatus: chargeStatus,
        transactionCreatedDate: {
          year: 2022,
          month: 11,
          day: 1,
        },
        transactionUpdatedDate: {
          year: 2022,
          month: 11,
          day: 1,
        },
        chargeDate: {
          date: {
            year: 2022,
            month: 11,
            day: 1,
          },
          time: {
            hour: 9,
            minute: 27,
            second: 5,
            nano: 0,
          },
        },
      },
    ],
    monthlyPremiumPayments: [
      {
        sequenceNumber: 0,
        invoiceDate: '2022-10-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 1,
        invoiceDate: '2022-11-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 2,
        invoiceDate: '2022-12-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 3,
        invoiceDate: '2023-01-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 4,
        invoiceDate: '2023-02-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 5,
        invoiceDate: '2023-03-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 6,
        invoiceDate: '2023-04-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 7,
        invoiceDate: '2023-05-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 8,
        invoiceDate: '2023-06-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 9,
        invoiceDate: '2023-07-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 10,
        invoiceDate: '2023-08-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 11,
        invoiceDate: '2023-09-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
      {
        sequenceNumber: 12,
        invoiceDate: '2023-10-01',
        totalDueAmount: 4644,
        premiumAmount: 4500,
        stampingFeeAmount: 9,
        surplusLinesTaxAmount: 135,
      },
    ],
  },
};
