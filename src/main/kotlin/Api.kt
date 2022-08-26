import kotlinx.browser.window

class Api {
    val baseUrl = "https://iconoplastic-api.herokuapp.com/"

    // TODO: Move to Coroutines when it will be fixed for Kotlin/JS
    fun getCodepoints(onLoad: (Map<String, String>) -> Unit) {
        window.fetch("$baseUrl/download/codepoints").then {
            it.text().then {
                onLoad(it.split("\n").associate {
                    kotlin.runCatching {
                        val final = it.split(' ')
                        final[0] to final[1]
                    }.getOrDefault("10mp" to "E8B8")
                }.toMap())
            }
        }
    }
}