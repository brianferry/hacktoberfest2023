import type { StateTextInterface } from '../types/StateTextInterface.js';
import { createContext } from '@lit-labs/context';
import { StoreConsumer, StoreProvider } from './index.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';


export const states = {
  DEFAULT: 'default',
  TRIAL_SUCCESS: 'trial_success',
  TRIAL_IN_PROGRESS: 'trial_in_progress',
  TRIAL_EXPIRED: 'trial_expired',
};

const checkTagForTextContent = (content: string) => {
  try {
    const _createTag = document.createElement('div');
    _createTag.innerHTML = content;
    const textContent = _createTag.textContent?.trim() || '';
    return textContent !== 'undefined' && textContent.length > 0;
  } catch (error) {
    return '';
  }
};

export class RHPTStateStore {
  public offers: Array<any>;
  public selectedOfferIndex: number;
  public state: string;
  public isIE11: boolean;
  public stateText: StateTextInterface;
  public disableAutoDownload: boolean;
  public initialized: boolean;
  public disableTryItPage: boolean;
  public isProcessing: boolean;
  public printHTML: (content: any) => any;

  constructor(host: any) {
    this.isProcessing = false;
    this.offers = [];
    this.selectedOfferIndex = 0;
    this.state = states.DEFAULT;
    this.isIE11 = /MSIE|Trident|Edge\//.test(window.navigator.userAgent);
    this.disableAutoDownload = false;
    this.disableTryItPage = false;
    this.initialized = false;
    this.stateText = {} as StateTextInterface;
    this.printHTML = (content: any) => {
      let _content = content || '';
      if (host === undefined || _content.length === 0 || !checkTagForTextContent(_content)) {
        return '';
      }
      try {
        // replace any global stateText
        if (host.stateText !== undefined && host.stateText?.global) {
          Object.keys(host.stateText.global).map(i => {
            // @todo needs IE11 fallback
            // _content = _content.replaceAll(`@${i}`, );
            const pattern = new RegExp(`@${i}`, 'g');
            // @ts-ignore
            _content = _content.replace(pattern, host.stateText.global[i]);
            return _content;
          });
        }
        // replace predefined variables
        // make sure that we have a selectedOffer to work with
        if (host.selectedOfferIndex !== undefined && host.offers !== undefined) {
          const selectedOffer = host.offers[host.selectedOfferIndex];
          if (selectedOffer) {
            _content = _content.replace(
              '@selectedOfferDownload',
              selectedOffer.download
            );
            _content = _content.replace(
              '@selectedOfferTitle',
              selectedOffer.title
            );
          }
        }
        return unsafeHTML(_content);
      } catch (error) {
        return '';
      }
    };
  }
}

export const rhptState = 'rhpt-state';

export const rhptStateContext = createContext<RHPTStateStore>(rhptState);

export const createProviderContext = (host: any) => {
  return new StoreProvider(host, rhptStateContext, new RHPTStateStore(host));
};

export const createConsumerContext = (host: any) => {
  return new StoreConsumer(
    host,
    rhptStateContext,
  );
};
