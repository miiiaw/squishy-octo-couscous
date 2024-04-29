import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'projectType',
            title: 'Project type',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    { value: 'personal', title: 'Personal' },
                    { value: 'client', title: 'Client'},
                    { value: 'school', title: 'School'},
                ],
            },
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags',
            },
        }),
    ]
})