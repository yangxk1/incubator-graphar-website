---
title: Nominating a Committer and PPMC member
sidebar_position: 3
---

## Initiate discussion in the community private mailing group
Any Apache GraphAr (incubating) PPMC member can initiate a voting discussion.
After PPMC member finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on GraphAr's private mailing list.
In the discussion email, the proposer should clearly state the candidate's contribution and give the address for reviewing the corresponding contribution, so that everyone can discuss and analyze it.
The discussion email is sent to private@graphar.apache.org. The discussion will last at least 72 hours. PPMC members will fully express their views on the proposed email.
The following is a template  discussion email:
```shell
To: private@graphar.apache.org
Subject: [DISCUSS] Propose {Candidate_Full_Name} as new {committer or PPMC member}

Hi, GraphAr PPMC,
 
I'd like to discuss the proposal to add ${Candidate_Full_Name} as a new ${committer or PPMC member}

<Brief description and links of ${Candidate_Full_Name}'s contributions>
 
1. https://github.com/apache/incubator-graphar/issues/created_by/{Candidate_GitHub_ID} 
2. https://github.com/apache/incubator-graphar/commits?author={Candidate_GitHub_ID}
```

:::caution
You can communicate with candidates in advance to obtain his/her full name, and replace the `${Candidate_Full_Name}`.
:::

## Initiate vote in the community private mailing group
If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a committer or PPMC member election vote on private mailing list.
The voting email is sent to private@graphar.apache.org for at least 72 hours, and at least 3 votes +1 passed; if 0 votes or 1 vote -1 vote, the vote will fail; if a -1 vote is initiated, the voter needs to EXPLAIN the reason for the -1 score clearly so that everyone can understand and know.
The following is a template  poll email: 
```shell
To: private@graphar.apache.org
Subject: [VOTE] New {committer or PPMC member}: {Candidate_Full_Name} 

Hi, GraphAr PPMC,
 
 <Brief description and links of {Candidate_Full_Name}'s contributions>

I think making him/her a ${committer or PPMC member} will be a recognition of his outstanding work for GraphAr. So, I am happy to call VOTE to accept ${Candidate_Full_Name} as a GraphAr ${committer or PPMC member}.
 
Voting will continue for at least 72 hours or until the required number of votes is reached.

Please vote accordingly:
[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason  
  
Here are three links to his contributions to GraphAr:
1. Issues: https://github.com/apache/incubator-graphar/pulls?q={Candidate_GitHub_ID}
2. PRs   : https://github.com/apache/incubator-graphar/issues?q={Candidate_GitHub_ID}
3. Others:  https://xxx.com/xxx/xxx/?q={Candidate_GitHub_ID}
```

## Feedback on voting results
After the voting email is over, the initiator of the vote needs to `remind the voting end` in the second [VOTE] email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to private@graphar.apache.org.
The following is a template  vote summary email:
```shell
To: private@graphar.apache.org
Subject: [RESULTS][VOTE] New {committer or PPMC member}: {Candidate_Full_Name}

Hi everyone,

The vote has now closed. The results are:

Binding Votes:
+1 [TOTAL BINDING +1 VOTES]
 0 [TOTAL BINDING +0/-0 VOTES]
-1 [TOTAL BINDING -1 VOTES]


Vote thread:
${vote_thread_url}

Then I'm going to invite ${Candidate_Full_Name} to join us.

Thanks for everyone's support!   
```

:::caution
If it is not passed, the result is "The vote for Candidate_Full_Name as an GraphAr committer or PPMC member" has FAILED and closed now."
:::

### Committer Invitation

This is the suggested invitation email to send to the newly elected committer, sent after a positive result from the vote for a new committer.

```shell
To: {Candidate_Email}
Cc: private@graphar.apache.org
Subject: Invitation to become Apache GraphAr (incubating) committer: {Candidate_Full_Name}

Hello {Candidate_Full_Name},

The GraphAr Podling Project Management Committee (PPMC)
hereby offers you committer privileges to the project.
These privileges are offered on the understanding that you'll use them
reasonably and with common sense. We like to work on trust
rather than unnecessary constraints.

Being a committer enables you to more easily make
changes without needing to go through the patch
submission process.

Being a committer does not require you to
participate any more than you already do. It does
tend to make one even more committed. You will
probably find that you spend more time here.

Of course, you can decline and instead remain as a
contributor, participating as you do now.

This personal invitation is a chance for you to accept or decline in private.
Please let us know in reply to this message whether you accept or decline.

**If you accept, you will need an Apache account (id) with privileges.
Please follow these instructions.**

A. If you already have an ICLA on file:

1. If you already have an Apache account, let us know your id and we
will grant you privileges on the project repositories.

2. If you have previously sent an ICLA, let us know the email address
and public name used on the ICLA and your preferred Apache id, and
we will request your account.

3. If the email address on the previously submitted ICLA is no longer
valid, let us know the email address and public name used on the new ICLA,
and your preferred Apache id. Continue to step B below and file your new ICLA.

Look to see if your preferred ID is already taken at
https://people.apache.org/committer-index.html

B. If there is not already an ICLA on file, you need to submit an ICLA:

1. Details of the ICLA and the forms are found
through this link: https://www.apache.org/licenses/#clas

2. Instructions for its completion and return to
the Secretary of the ASF are found at
https://www.apache.org/licenses/contributor-agreements.html#submitting

Do not copy the project or any other individual on your message
to Secretary, as the form contains Personally Identifiable Information
that should be kept private.

3. When you complete the ICLA form, be sure to include in the form
the Apache GraphAr project and choose a
unique Apache ID. Look to see if your preferred
ID is already taken at
https://people.apache.org/committer-index.html
This will allow the Secretary to notify the PPMC
when your ICLA has been recorded.

When recording of your ICLA is noted, you will
receive a follow-up message with the next steps for
establishing you as a committer.
```

### Announcement of the new committer
This is the email to announce the new committer to graphar-dev once the account has been created.

```shell
To: dev@graphar.apache.org
Subject: [ANNOUNCE] New committer: {Candidate_Full_Name}

The Podling Project Management Committee (PPMC) for Apache GraphAr
has invited {Candidate_Full_Name} to become a committer and we are pleased
to announce that they have accepted.

### add specific details here ###

Being a committer enables easier contribution to the
project since the committer has write access to the repository
This should enable better productivity.
```

 
At this point, the entire process is completed, and the candidate officially becomes the Committer or PMC Member of the project.

---
The document is based on [apache newcommitter](https://community.apache.org/newcommitter.html#new-committer-process)