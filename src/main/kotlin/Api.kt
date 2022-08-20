import kotlinx.browser.window
import kotlinx.coroutines.await

class Api {
    val baseUrl = "https://iconoplastic-api.herokuapp.com/"

    suspend fun getCodepoints(): Map<String, String> {
        val response = window.fetch("$baseUrl/download/codepoints").await().text().await()
        console.log(response)
        return response.split("\n").associate {
            kotlin.runCatching {
                val final = it.split(' ')
                final[0] to final[1]
            }.getOrDefault("10mp" to "E8B8")
        }.toMap()
    }
}