import { ProjectMeta } from '../types';

function checkString(keyword: string, project: ProjectMeta) {
	let tags = project.tags.join(' ');
	let string =
		`${project.title} ${project.excerpt} ${project.slug} ${tags}`.toLowerCase();
	let isAvailable = string.includes(keyword.toLowerCase());
	if (isAvailable) {
		return project;
	}
}
function checkTag(tag: string, project: ProjectMeta) {
	let isAvailable = project.tags.includes(tag.toLowerCase());
	if (isAvailable) return project;
}

export { checkString, checkTag };
