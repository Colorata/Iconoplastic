plugins {
    kotlin("js") version "1.7.10"
}

group = "com.colorata"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven")
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlinx:kotlinx-html:0.7.5")
    implementation("io.ktor:ktor-client-core:${project.property("ktor.version")}")
    implementation("io.ktor:ktor-client-serialization:${project.property("ktor.version")}")
    implementation("io.ktor:ktor-client-json:${project.property("ktor.version")}")
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
}

afterEvaluate {
    rootProject.extensions.configure<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension> {
        versions.webpackDevServer.version = "4.0.0"
        versions.webpackCli.version = "4.9.0"
        nodeVersion = "16.0.0"
    }
}

gradle.taskGraph.whenReady {
    val distributionsPath = rootProject.buildDir.absolutePath + "/distributions"
    copy {
        from(distributionsPath)
        into(rootDir.absolutePath + "/docs")
    }
}