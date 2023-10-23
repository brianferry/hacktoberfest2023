export interface Message {
    type?: 'INFO' | 'ERROR';
    position?: 'center';
    text?: MessageText;
  }

export interface MessageText {
  title?: string;
  body?: string;
}

export type StateTextInterface = {
    global: {
      eligibilityDaysRemaining: number | null;
      eligibleDate: string | null;
      productName: string;
      disclaimer: string;
      progressSteps: {
        expired: string;
        initial: string;
        login: string;
        success: string;
      };
    };
    default: {
      action: string | null;
      cta: string;
      header: string;
      helpText: string;
      info: string;
      modalHeader: string;
      selectText: string;
      trialEligibility: {
        text: string;
        tooltip: string;
      };
    };
    trial_success: {
      header: string;
      subheader: string;
      trialEligibility: {
        text: string;
        tooltip: string;
      };
      logo: string;
      eligibilityStatement: string;
      downloads: {
        header: string;
        content: string;
        footer: string;
      };
    };
    trial_expired: {
      header: string;
      logo: string;
      eligibilityStatement: string;
      bottom: {
        header: string;
        content: string;
        footer: string;
      };
    };
    trial_in_progress: {
      header: string;
      logo: string;
      eligibilityStatement: string;
      downloads: {
        header: string;
        content: string;
        footer: string;
      };
    };
    messages?: Message[];
}
