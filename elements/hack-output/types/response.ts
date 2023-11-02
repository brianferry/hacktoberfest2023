export class ChatGPTResponse {
  responseType: string;
  groupedSuggestions: GroupedSuggestions[];

  groupSuggestions(suggestions: Suggestion[]): GroupedSuggestions[] {
    const groupedSuggestions: GroupedSuggestions[] = [];
    suggestions.forEach((suggestion: Suggestion) => {
      const index = groupedSuggestions.findIndex((gs: GroupedSuggestions) => gs.type === suggestion.type);
      if (index === -1) {
        groupedSuggestions.push(new GroupedSuggestions(suggestion.type, [suggestion]));
      } else {
        groupedSuggestions[index].suggestions.push(suggestion);
      }
    });
    return groupedSuggestions;
  }

  constructor(responseType: string, suggestions: Suggestion[]) {
    this.responseType = responseType;
    this.groupedSuggestions = this.groupSuggestions(suggestions);
  }
}

export class GroupedSuggestions {
  type: string;
  suggestions: Suggestion[];
  constructor(type: string, suggestions: Suggestion[]) {
    this.type = type;
    this.suggestions = suggestions;
  }
}

export class Suggestion {
  type: string;
  suggestion: string;
  shortDescription?: string;
  ref?: string;
  constructor(type: string, suggestion: string, shortDescription?: string, ref?: string) {
    this.type = type;
    this.suggestion = suggestion;
    this.shortDescription = shortDescription;
    this.ref = ref;
  }
}

