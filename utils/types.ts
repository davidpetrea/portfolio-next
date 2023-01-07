export type GithubRepo = {
 id: string | number;
 name: string;
 description: string | null;
 language: string;
 html_url: string;
};

export type Tech = 'next' | 'typescript' | 'tailwindCSS' | 'mongoDB';
