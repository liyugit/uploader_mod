/**
 * @fileOverview 我的版本，只要picker这种交互模式。
 */
define([
    '../base',
    // widgets
    '../widgets/filepicker',
    '../widgets/image',
    '../widgets/queue',
    '../widgets/runtime',
    '../widgets/upload',
    '../widgets/validator',

    // runtimes
    // html5
    '../runtime/html5/blob',
    '../runtime/html5/filepicker',
    '../runtime/html5/imagemeta/exif',
    '../runtime/html5/androidpatch',
    '../runtime/html5/image',
    '../runtime/html5/transport',

    // flash
    '../runtime/flash/filepicker',
    '../runtime/flash/image',
    '../runtime/flash/transport'
], function( Base ) {
    return Base;
});