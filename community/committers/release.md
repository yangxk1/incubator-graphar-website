---
title: Create a release
sidebar_position: 1
---

This document mainly introduces how the release manager
releases a new version in accordance with the Apache requirements.

## Introduction

`Source Release` is the key point which Apache values, and is also necessary for an ASF release.

Please remember that publishing software has legal consequences.

This guide complements the foundation-wide policies and guides:

- [Release Policy](https://www.apache.org/legal/release-policy.html)
- [Release Distribution Policy](https://infra.apache.org/release-distribution)
- [Release Creation Process](https://infra.apache.org/release-publishing.html)

## Some Terminology of release

In the context of our release, we use several terms to describe different stages of the release process.

Here's an explanation of these terms:

- `graphar_version`: the version of GraphAr to be released, like `0.12.0`.
- `release_version`: the version of release candidate, like `0.12.0-rc.1`.
- `rc_version`: the minor version for voting round, like `rc.1`.

## Preparation

:::caution

This section is the requirements for individuals who are new to the role of release manager.

:::

## Start discussion about the next release

Start a discussion about the next release via sending email to: dev@graphar.apache.org:

Title:

```
[DISCUSS] Release Apache GraphAr(incubating) ${graphar_version}
```

Content:

```
Hello, Apache GraphAr(incubating) Community,

This is a call for a discussion to release Apache GraphAr(incubating) version ${graphar_version}.

The change lists about this release:

https://github.com/apache/incubator-graphar/compare/v${graphar_last_version}...main

Please leave your comments here about this release plan. We will bump the version in the repo and start the release process after the discussion.

Thanks

${name}
```

## Start a tracking issue about the next release

Start a tracking issue on GitHub for the upcoming release to track all tasks that need to be completed.

Title:

```
Tracking issues of GraphAr ${graphar_version} Release
```

Content:

```markdown
This issue is used to track tasks of the graphar ${graphar_version} release.

## Tasks

### Blockers

> Blockers are the tasks that must be completed before the release.

### Build Release

#### GitHub Side

- [ ] Bump version in project
  - [ ] cpp
  - [ ] scala
- [ ] Update docs
- [ ] Push release candidate tag to GitHub

#### ASF Side

- [ ] Create an ASF Release
- [ ] Upload artifacts to the SVN dist repo

### Voting

- [ ] Start VOTE at graphar community
- [ ] Start VOTE at incubator community

### Official Release

- [ ] Push the release git tag
- [ ] Publish artifacts to SVN RELEASE branch
- [ ] Change GraphAr Website download link
- [ ] Send the announcement

For details of each step, please refer to: https://graphar.apache.org/community/committers/release
```

## GitHub Side

### Bump version in project

Bump all components' version in the project to the new graphar version.
Please note that this version is the exact version of the release, not the release candidate version.

- cpp library: bump version in `cpp/CMakeLists.txt`
- scala with spark library: bump version in `maven-projects/pom.xml`

### Push release candidate tag

After bump version PR gets merged, we can create a GitHub release for the release candidate:

- Create a tag at `main` branch on the `Bump Version` / `Patch up version` commit: `git tag -s "v0.12.0-rc.1"`, please correctly check out the corresponding commit instead of directly tagging on the main branch.
- Push tags to GitHub: `git push --tags`.


## ASF Side

If any step in the ASF Release process fails and requires code changes,
we will abandon that version and prepare for the next one.
Our release page will only display ASF releases instead of GitHub Releases.

### Create an ASF Release

After GitHub Release has been created, we can start to create ASF Release.

- Checkout to released tag. (e.g. `git checkout v0.12.0-rc.1`, tag is created in the previous step)
- create a new branch for the release: `git checkout -b release-0.12.0-rc.1`
- Use the release script to create a new release: `python ./dev/release/release.py`
  - This script will generate the release candidate artifacts under `dist`, including:
    - `apache-graphar-{version}-incubating-src.tar.gz`
    - `apache-graphar-{version}-incubating-src.tar.gz.asc`
    - `apache-graphar-{version}-incubating-src.tar.gz.sha512`
- Push the newly created branch to GitHub

### Upload artifacts to the SVN dist repo

:::info

SVN is required for this step.

:::

The svn repository of the dev branch is: https://dist.apache.org/repos/dist/dev/incubator/graphar

First, checkout GraphAr to local directory:

```shell
# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.
svn co https://dist.apache.org/repos/dist/dev/incubator/graphar graphar-dist-dev
```

Then, upload the artifacts:

> The `${release_version}` here should be like `0.12.0-rc.1`

```shell
cd graphar-dist-dev
# create a directory named by version
mkdir ${release_version}
# copy source code and signature package to the versioned directory
cp ${repo_dir}/dist/* ${release_version}/
# check svn status
svn status
# add to svn
svn add ${release_version}
# check svn status
svn status
# commit to SVN remote server
svn commit -m "Prepare for graphar ${release_version}"
```

Visit https://dist.apache.org/repos/dist/dev/incubator/graphar/ to make sure the artifacts are uploaded correctly.

### Rescue

If you accidentally published wrong or unexpected artifacts, like wrong signature files, wrong sha256 files,
please cancel the release for the current `release_version`,
_increase th RC counting_ and re-initiate a release with the new `release_version`.
And remember to delete the wrong artifacts from the SVN dist repo.

## Voting

GraphAr requires votes from both the GraphAr Community and the Incubator Community.

### GraphAr Community Vote

GraphAr Community Vote should send email to: [dev@graphar.apache.org](mailto:dev@graphar.apache.org)

Title:

```
[VOTE] Release Apache GraphAr(incubating) ${release_version} - GraphAr Vote Round 1
```

Content:

```
Hello, Apache GraphAr(incubating) Community,

This is a call for a vote to release Apache GraphAr(incubating) version ${graphar_version}.

The tag to be voted on is ${graphar_version}.

The release candidate:

https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/

Keys to verify the release candidate:

https://downloads.apache.org/incubator/graphar/KEYS

Git tag for the release:

https://github.com/apache/incubator-graphar/releases/tag/v${release_version}

The change lists about this release:

https://github.com/apache/incubator-fury/compare/v0.11.4...v0.12.0-rc.1

Please download, verify, and test.

The VOTE will be open for at least 72 hours and until the necessary
number of votes are reached.

[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason

To learn more about apache graphar, please see https://graphar.apache.org/

Checklist for reference:

[ ] Download links are valid.
[ ] Checksums and PGP signatures are valid.
[ ] Source code distribution have correct names matching the current release.
[ ] LICENSE/NOTICE files exist and are correct.
[ ] No unexpected binary files bundled in the source archive.
[ ] All source files have ASF headers.
[ ] Can compile from source.

More detailed checklist please refer to:

https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist


How to Build GraphAr, please refer to:

https://graphar.apache.org/community/development


Thanks

${name}
```

> Tips: The 72 hours is the minimum time for voting, so we can ensure that community members from various time zones can participate in the verification process.

After at least 3 `+1` binding vote ([from GraphAr Podling PMC member](https://people.apache.org/phonebook.html?podling=graphar)) and no veto, claim the vote result:

Title:

```
[RESULT][VOTE] Release Apache GraphAr(incubating) ${release_version} - GraphAr Vote Round 1
```

Content:

```
Hello, Apache GraphAr(incubating) Community,

The vote to release Apache GraphAr(incubating) ${release_version} has passed.

The vote PASSED with 3 +1 binding and 1 +1 non-binding votes, no +0 or -1 votes:

Binding votes:

- xxx
- yyy
- zzz

Non-Binding votes:

- aaa

Vote thread: ${vote_thread_url}

Thanks

${name}
```

It's better to use the real name or the public name which is displayed on the voters' profile page,
or Apache ID of the voter, to show who voted in the vote result email,
and avoid using nicknames, it will make the vote result hard for others to track the voter.
We should make sure the binding votes are from the people who have the right to vote the binding one.

### Incubator Community Vote

Incubator Community Vote should send email to: [general@incubator.apache.org](mailto:general@incubator.apache.org):

Title:

```
[VOTE] Release Apache GraphAr(incubating) ${release_version} - Incubator Vote Round 1
```

Content:

```
Hello Incubator PMC,

The Apache GraphAr community has voted and approved the release of Apache
GraphAr(incubating) ${release_version}. We now kindly request the IPMC members
review and vote for this release.

Apache GraphAr(incubating) is an open-source and language-independent data file format designed for
efficient graph data storage and retrieval.

GraphAr community vote thread:

${community_vote_thread_url}

Vote result thread:

${community_vote_result_thread_url}

The release candidate:

https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/

This release has been signed with a PGP available here:

https://downloads.apache.org/incubator/graphar/KEYS

Git tag for the release:

https://github.com/apache/incubator-graphar/releases/tag/${release_version}

Please download, verify, and test.

The VOTE will be open for at least 72 hours and until the necessary
number of votes are reached.

[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason

To learn more about apache graphar, please see https://graphar.apache.org/

Checklist for reference:

[ ] Download links are valid.
[ ] Checksums and signatures.
[ ] LICENSE/NOTICE files exist
[ ] No unexpected binary files
[ ] All source files have ASF headers
[ ] Can compile from source

More detailed checklist please refer to:
https://github.com/apache/incubator-graphar/tree/main/scripts

To compile from source, please refer to:
https://graphar.apache.org/community/development

Thanks

${name}
```

After at least 72 hours with at least 3 +1 binding vote (from Incubator PMC member) and no veto, claim the vote result:

Title:

```
[RESULT][VOTE] Release Apache GraphAr(incubating) ${release_version} - Incubator Vote Round 1
```

Content:

```
Hi Incubator PMC,

The vote to release Apache GraphAr(incubating) ${release_version} has passed with
4 +1 binding and 3 +1 non-binding votes, no +0 or -1 votes.

Binding votes：

- xxx
- yyy
- zzz

Non-Binding votes:

- aaa

Vote thread: ${incubator_vote_thread_url}

Thanks for reviewing and voting for our release candidate.

We will proceed with publishing the approved artifacts and sending out the announcement soon.
```

## Official Release

### Push the release git tag

```shell
# Checkout the tags that passed VOTE
git checkout ${release_version}
# Tag with the graphar version
git tag -s ${graphar_version}
# Push tags to GitHub to trigger releases
git push origin ${graphar_version}
```

### Publish artifacts to SVN RELEASE branch

```shell
svn mv https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version} https://dist.apache.org/repos/dist/release/incubator/graphar/${graphar_version} -m "Release ${graphar_version}"
```

### Create a GitHub Release

- Click [here](https://github.com/apache/incubator-graphar/releases/new) to create a new release.
- Pick the git tag of this release version from the dropdown menu.
- Make sure the branch target is `main`.
- Generate the release note by clicking the `Generate release notes` button.
- Add the release note from every component's `upgrade.md` if there are breaking changes before the content generated by GitHub. Check them carefully.
- Publish the release.

### Send the announcement

Send the release announcement to `dev@graphar.apache.org` and CC `announce@apache.org`.

> Tips: Please follow the [Committer Email](https://infra.apache.org/committer-email.html) guide to make sure you have already set up the email SMTP. Otherwise, your email cannot be sent to the announcement mailing list.

Instead of adding breaking changes, let's include the new features as "notable changes" in the announcement.

Title:

```
[ANNOUNCE] Release Apache GraphAr(incubating) ${graphar_version}
```

Content:

```
Hi all,

The Apache GraphAr(incubating) community is pleased to announce
that Apache GraphAr(incubating) ${graphar_version} has been released!

GraphAr is a data access layer that allows users to easily and efficiently
retrieve data from various storage services in a unified way.

The notable changes since ${graphar_version} include:
1. xxxxx
2. yyyyyy
3. zzzzzz

Please refer to the change log for the complete list of changes:
https://github.com/apache/incubator-graphar/releases/tag/v${graphar_version}

Apache GraphAr website: https://graphar.apache.org/

Download Links: https://graphar.apache.org/download

GraphAr Resources:
- Issue: https://github.com/apache/incubator-graphar/issues
- Mailing list: dev@graphar.apache.org

Thanks
On behalf of Apache GraphAr community

---
Apache GraphAr (incubating) is an effort undergoing incubation at the Apache
Software Foundation (ASF), sponsored by the Apache Incubator PMC.

Incubation is required of all newly accepted projects until a further review
indicates that the infrastructure, communications, and decision making process
have stabilized in a manner consistent with other successful ASF projects.

While incubation status is not necessarily a reflection of the completeness
or stability of the code, it does indicate that the project has yet to be
fully endorsed by the ASF.
```

## Post release

After the official release out, you may perform a few post actions.

--- 

This doc refer from [Apache OpenDAL](https://opendal.apache.org/)
