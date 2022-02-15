const { src, dest, watch } = require('gulp')
const file_include = require('gulp-file-include')

async function include() {
    return src('./source_html/*.html')
        .pipe(
            file_include({
                prefix: '@@',
                basepath: '@file'
            })
        )
        .pipe(dest('./'))
}

function watching() {
    watch('./source_html/*.html', include)
}

exports.watch = watching

// gulp watch
