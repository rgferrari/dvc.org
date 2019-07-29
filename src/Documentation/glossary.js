export default {
  name: 'Glossary',
  desc:
    'This guide is aimed to familiarize the users with definitions to ' +
    'relevant DVC concepts and terminologies which are frequently used.',
  contents: [
    {
      name: 'Workspace directory',
      match: ['workspace'],
      desc:
        'The **workspace** contains all of your DVC **project** files and ' +
        "directories. It's typically also a Git **repository**. See also " +
        '[`dvc init`](/doc/commands-reference/init).'
    },
    {
      name: 'DVC cache',
      match: ['DVC cache', 'cache', 'cache directory'],
      desc:
        'The DVC cache is a hidden storage (by default located in the ' +
        '`.dvc/cache` directory) for files that are under DVC control, and ' +
        'their different versions. For more details, please refer to this ' +
        '[document](/doc/user-guide/dvc-files-and-directories' +
        '#structure-of-cache-directory).'
    },
    {
      name: 'Data artifact',
      match: ['data artifact', 'data artifacts'],
      desc:
        'Any **data** file or directory, as well as intermediate or final ' +
        'result (such as extracted features or a ML model file) that is ' +
        'under DVC control. Refer to [Data and Model Files Versioning]' +
        '(/doc/use-cases/data-and-model-files-versioning) for more details.'
    },
    {
      name: 'Import stage',
      match: ['import stage', 'import stages'],
      desc:
        'Stage (DVC-file) created with the `dvc import` or `dvc import-url` ' +
        'commands. They represent files or directories from external sources.'
    }
  ]
}
