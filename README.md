# github-software-analytics-embedding
Seminar Project of the Seminar "Advanced Techniques for Analysis and Visualization of Software Data" of CGS, HPI and DEF in the Summer Term 2022

## Installation

Todo: Description of how to add the HiViSer action to a repository

## Development

Install `pnpm`:

```
npm i pnpm -g
```

### Setup Webapp Development
To setup the Webapp for development run:

```
cd webapp
pnpm i
pnpm run dev
```
### Setup Code Anayltics Development locally
Create an .env file
```
cd analytics
cp .env.example .env
```
Make shure you fill in the GITHUB_TOKEN variable in the `.env` file

To setup the node application for code analysis for development run:
```
cd analytics
pnpm i
pnpm start
```

### Git blobs gh api

gh api -H "Accept: application/vnd.github.v3+json" /repos/hpicgs/github-software-analytics-embedding/git/matching-refs/notes/commits

gh api -H "Accept: application/vnd.github.v3+json" /repos/hpicgs/github-software-analytics-embedding/git/commits/1ff88b0dc996214148b5b98669f52cd876ea9e4a

gh api --method POST -H "Accept: application/vnd.github.v3+json" /repos/hpicgs/github-software-analytics-embedding/git/blobs -f content='My metrics blob' -f encoding='utf-8'

Get the blob
```
gh api -H "Accept: application/vnd.github.v3+json" /repos/hpicgs/github-software-analytics-embedding/git/blobs/a7553cd0a3c0f65602eb761017063c01558b4b91
```

#### Curl
curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/hpicgs/github-software-analytics-embedding/git/blobs/a7553cd0a3c0f65602eb761017063c01558b4b91

curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/hpicgs/github-software-analytics-embedding/git/blobs/a7553cd0a3c0f65602eb761017063c01558b4b91 | jq -r '.content' | base64 --decode

## Building and running the docker container locally
```
docker build -t analytics . && docker run -it analytics
```
