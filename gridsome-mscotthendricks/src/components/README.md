# Compontents

## Background

Add components that will be imported to Pages and Layouts to this folder.

Learn more about components here: https://gridsome.org/docs/components/

## Summary of gridsome-mscotthendricks\src\components

Current components include:

- **Author.vue** - Layout of author profile, includes special properties to condinally include various parts of the layout ( `showTitle`, `showSubtitle`, `showLinks`, `showIntro` ).
- **Footer.vue**
- **Logo.vue**
- **Nav.vue**
- **Tags.vue**
- **Services.vue**
- **ToggleTheme.vue**

## Card components

There are two similar, but different card components. Since there are two areas of the site that list collections of resources related to either Work or Personal projects.

To help keep these areas seperate, the `PostTags.vue` and `WorkSubjects.vue` compontent take a `tag` property that is avaiable to every document located in `gridsome-mscotthendricks\content`.

The `WorkSubjects.vue` includes a `tag` and special `subjects` to list work related subject matters.

```text
Note: Both Work and Post types have a Tag property. This is to provide cross links from either /work/ or /post/ sections of the website.
```

There are two folders that help keep the markdown files seperate.

Each file has a set of YAML tags in markdown that gridsome uses to build unique `tags` and `subjects` fields.

### gridsome-mscotthendricks\content\posts

For post and persona blog related content. Tags are marked with a hash-tag (#)

- **PostCard.vue** - Layout of the entire card body used to display personal blog post content, including `post.cover_image`, `post.title`, `post.description`, `post.path`. Also Include the following subcompontents:
  - **PostMeta.vue** - Layout of the `post.date` and `post.timeToRead`
  - **PostTags.vue** - Layout of a list of `post.tags` and relative `tag.id`, `tag.path`, and `tag.title`

### gridsome-mscotthendricks\content\work

For work related content, there are these compontents which have a unique `subject` property. Subjecst are marked with a [High Voltage (⚡)](https://emojipedia.org/high-voltage/) [[U+26A1](https://emojipedia.org/high-voltage/)]

- **WorkCard.vue** - blahblahblah. Also Include the following subcompontents:
  - **WorkMeta.vue** - Layout of the `work.date` and `work.timeToRead`
  - **WorkSubjects.vue** - Layout of work.tags, including `tag.id`, `tag.path`, and `tag.title`, and includes a list of `work.subjects`, and relative `subject.id`, `subject.path`, `subject.title`
