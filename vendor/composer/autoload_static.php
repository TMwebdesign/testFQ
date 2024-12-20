<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8de789a2c20183752e72c14c93a923cf
{
    public static $files = array (
        'd64fa7ce6b9afff2171ed9311312de10' => __DIR__ . '/../..' . '/customizer/helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'Rishi\\Customizer\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Rishi\\Customizer\\' => 
        array (
            0 => __DIR__ . '/../..' . '/customizer/classes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8de789a2c20183752e72c14c93a923cf::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8de789a2c20183752e72c14c93a923cf::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8de789a2c20183752e72c14c93a923cf::$classMap;

        }, null, ClassLoader::class);
    }
}
