import {ArrowRight, PlayCircle} from "lucide-react";
import Languages from "../Utils/Languages.jsx"

export default function ProjectCard({
                                        dataId,
                                        projectData
                                    }) {

    return (
        <div className="game-card bg-[rgb(41,37,36)] rounded-xl overflow-hidden border border-stone-700">
            <div className={`h-48 bg-gradient-to-br from-red-600 to-amber-800 relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    {(projectData.default_branch !== undefined || false) ? (<>
                            <img className="project-image w-full h-full"
                                 src={`https://raw.githubusercontent.com/${projectData.full_name}/${projectData.default_branch}/ProjectImage.png`}
                                 alt="project logo"/></>) :
                        (<>
                            <img className="project-image w-full h-full"
                                 src={projectData.image}
                                 style={{objectFit: "cover"}}
                                 alt="project logo"/>
                        </>)}

                </div>
                {/*<div className="absolute top-3 left-3 bg-black/50 rounded-lg px-3 py-1 text-xs text-white">*/}
                {/*    {category}*/}
                {/*</div>*/}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 game-title">{projectData.name}</h3>
                <p className="text-stone-400 mb-4">{projectData.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {projectData.default_branch !== undefined ? (
                            <Languages prop={{"repoName": projectData.name}}/>
                        ) :
                        (<>
                            <Languages prop={projectData.languages}/>
                        </>)
                    }
                    {/*        {tags.map((tag, idx) => (*/}
                    {/*            <span key={idx} className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">*/}
                    {/*  {tag}*/}
                    {/*</span>*/}
                    {/*        ))}*/}
                </div>
                {projectData?.html_url && (
                    <a href={projectData.html_url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="view-project text-sm text-red-400 hover:text-red-300 font-medium flex items-center"
                       data-id={dataId}>
                        View Github Repo
                        <ArrowRight className="h-4 w-4 ml-1"/>
                    </a>
                )}
            </div>
        </div>
    );
}


// {
//     "id": 469371899,
//     "node_id": "R_kgDOG_oL-w",
//     "name": "Applying_EANNs",
//     "full_name": "stharanzn/Applying_EANNs",
//     "private": false,
//     "owner": {
//     "login": "stharanzn",
//         "id": 38763905,
//         "node_id": "MDQ6VXNlcjM4NzYzOTA1",
//         "avatar_url": "https://avatars.githubusercontent.com/u/38763905?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stharanzn",
//         "html_url": "https://github.com/stharanzn",
//         "followers_url": "https://api.github.com/users/stharanzn/followers",
//         "following_url": "https://api.github.com/users/stharanzn/following{/other_user}",
//         "gists_url": "https://api.github.com/users/stharanzn/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/stharanzn/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/stharanzn/subscriptions",
//         "organizations_url": "https://api.github.com/users/stharanzn/orgs",
//         "repos_url": "https://api.github.com/users/stharanzn/repos",
//         "events_url": "https://api.github.com/users/stharanzn/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/stharanzn/received_events",
//         "type": "User",
//         "user_view_type": "public",
//         "site_admin": false
// },
//     "html_url": "https://github.com/stharanzn/Applying_EANNs",
//     "description": "A 2D Unity simulation in which cars learn to navigate themselves through different courses. The cars are steered by a feedforward neural network. The weights of the network are trained using a modified genetic algorithm.",
//     "fork": true,
//     "url": "https://api.github.com/repos/stharanzn/Applying_EANNs",
//     "forks_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/forks",
//     "keys_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/keys{/key_id}",
//     "collaborators_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/collaborators{/collaborator}",
//     "teams_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/teams",
//     "hooks_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/hooks",
//     "issue_events_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/issues/events{/number}",
//     "events_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/events",
//     "assignees_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/assignees{/user}",
//     "branches_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/branches{/branch}",
//     "tags_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/tags",
//     "blobs_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/git/blobs{/sha}",
//     "git_tags_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/git/tags{/sha}",
//     "git_refs_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/git/refs{/sha}",
//     "trees_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/git/trees{/sha}",
//     "statuses_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/statuses/{sha}",
//     "languages_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/languages",
//     "stargazers_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/stargazers",
//     "contributors_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/contributors",
//     "subscribers_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/subscribers",
//     "subscription_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/subscription",
//     "commits_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/commits{/sha}",
//     "git_commits_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/git/commits{/sha}",
//     "comments_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/comments{/number}",
//     "issue_comment_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/issues/comments{/number}",
//     "contents_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/contents/{+path}",
//     "compare_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/compare/{base}...{head}",
//     "merges_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/merges",
//     "archive_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/{archive_format}{/ref}",
//     "downloads_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/downloads",
//     "issues_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/issues{/number}",
//     "pulls_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/pulls{/number}",
//     "milestones_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/milestones{/number}",
//     "notifications_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/notifications{?since,all,participating}",
//     "labels_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/labels{/name}",
//     "releases_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/releases{/id}",
//     "deployments_url": "https://api.github.com/repos/stharanzn/Applying_EANNs/deployments",
//     "created_at": "2022-03-13T12:58:07Z",
//     "updated_at": "2022-03-13T12:58:05Z",
//     "pushed_at": "2017-10-01T09:11:14Z",
//     "git_url": "git://github.com/stharanzn/Applying_EANNs.git",
//     "ssh_url": "git@github.com:stharanzn/Applying_EANNs.git",
//     "clone_url": "https://github.com/stharanzn/Applying_EANNs.git",
//     "svn_url": "https://github.com/stharanzn/Applying_EANNs",
//     "homepage": "",
//     "size": 20660,
//     "stargazers_count": 0,
//     "watchers_count": 0,
//     "language": null,
//     "has_issues": false,
//     "has_projects": true,
//     "has_downloads": true,
//     "has_wiki": true,
//     "has_pages": false,
//     "has_discussions": false,
//     "forks_count": 0,
//     "mirror_url": null,
//     "archived": false,
//     "disabled": false,
//     "open_issues_count": 0,
//     "license": {
//     "key": "mit",
//         "name": "MIT License",
//         "spdx_id": "MIT",
//         "url": "https://api.github.com/licenses/mit",
//         "node_id": "MDc6TGljZW5zZTEz"
// },
//     "allow_forking": true,
//     "is_template": false,
//     "web_commit_signoff_required": false,
//     "topics": [],
//     "visibility": "public",
//     "forks": 0,
//     "open_issues": 0,
//     "watchers": 0,
//     "default_branch": "master"
// }
