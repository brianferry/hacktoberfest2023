export class ChatGPTResponse {
    groupSuggestions(suggestions) {
        const groupedSuggestions = [];
        suggestions.forEach((suggestion) => {
            const index = groupedSuggestions.findIndex((gs) => gs.type === suggestion.type);
            if (index === -1) {
                groupedSuggestions.push(new GroupedSuggestions(suggestion.type, [suggestion]));
            }
            else {
                groupedSuggestions[index].suggestions.push(suggestion);
            }
        });
        return groupedSuggestions;
    }
    constructor(responseType, suggestions) {
        this.responseType = responseType;
        this.groupedSuggestions = this.groupSuggestions(suggestions);
    }
}
export class GroupedSuggestions {
    constructor(type, suggestions) {
        this.type = type;
        this.suggestions = suggestions;
    }
}
export class Suggestion {
    constructor(type, suggestion, shortDescription, ref) {
        this.type = type;
        this.suggestion = suggestion;
        this.shortDescription = shortDescription;
        this.ref = ref;
    }
}
//# sourceMappingURL=response.js.map