---
title: Create a release (Work in Progress)
sidebar_position: 1
---

This document mainly introduces how the release manager
releases a new version of Apache GraphAr in accordance with the Apache requirements.

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
[DISCUSS] Release Apache GraphAr(incubating) ${release_version}
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
  - [ ] java
  - [ ] spark
  - [ ] pyspark
- [ ] Update docs
- [ ] Generate dependencies list
- [ ] Push release candidate tag to GitHub

#### ASF Side

- [ ] Create an ASF Release
- [ ] Upload artifacts to the SVN dist repo
- [ ] Close the Nexus staging repo

### Voting

- [ ] Start VOTE at graphar community
- [ ] Start VOTE at incubator community

### Official Release

- [ ] Push the release git tag
- [ ] Publish artifacts to SVN RELEASE branch
- [ ] Change GraphAr Website download link
- [ ] Release Maven artifacts
- [ ] Send the announcement

For details of each step, please refer to: https://graphar.apache.org/community/committers/release
```

## GitHub Side

### Bump version in project

Bump all components' version in the project to the new graphar version.
Please note that this version is the exact version of the release, not the release candidate version.

- cpp library: bump version in `cpp/CMakeLists.txt`
- java library: bump version in `java/pom.xml`
- spark library: bump version in `spark/pom.xml`
- pyspark library: bump version in `pyspark/poetry.toml`

### Update docs

### Push release candidate tag

After bump version PR gets merged, we can create a GitHub release for the release candidate:

- Create a tag at `main` branch on the `Bump Version` / `Patch up version` commit: `git tag -s "v0.12.0-rc.1"`, please correctly check out the corresponding commit instead of directly tagging on the main branch.
- Push tags to GitHub: `git push --tags`.
