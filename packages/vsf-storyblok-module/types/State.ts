export interface StoryblokStories {
  [key: string]: {
    loading: boolean;
    story: object;
  }
}

export interface StoryblokState {
  previewToken?: string;
  storeCode: string;
  stories: StoryblokStories;
  supportsWebp: boolean;
}
