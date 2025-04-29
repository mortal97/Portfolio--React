import { Project } from '../types';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export async function fetchGithubProjects(): Promise<Project[]> {
  try {
    const { data: repos } = await octokit.repos.listForUser({
      username: 'mortal97',
      sort: 'updated',
      direction: 'desc'
    });

    return repos
      .filter(repo => !repo.fork && !repo.private)
      .map(repo => ({
        id: repo.name,
        title: repo.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        description: repo.description || 'A project built with modern web technologies.',
        tags: [repo.language || 'JavaScript'].concat(repo.topics || []),
        imageUrl: `https://opengraph.githubassets.com/1/${repo.full_name}`,
        codeUrl: repo.html_url,
        featured: true
      }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}