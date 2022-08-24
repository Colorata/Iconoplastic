import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onKeyUpFunction
import kotlinx.html.js.script
import org.w3c.dom.HTMLInputElement
import ui.GridItem

fun main() {
    window.onload = {
        document.body?.append {
            style {

            }
            sayHello()
        }
        document.head?.append {

        }
    }
}

fun TagConsumer<*>.sayHello() {
    var response: Map<String, String>? = null
    div("row") {
        CoroutineScope(Dispatchers.Default).launch {
            response = Api().getCodepoints()
            val grid = document.getElementById("grid-icons")
            response?.forEach {
                grid?.append {
                    GridItem(it)
                }
            }
        }
        div("column") {
            img(classes = "logo")
            div("search-box search-row") {
                span("search-icon") {
                    +"\uE8B6"
                }
                span {
                    input(classes = "search") {
                        placeholder = "Search icons"
                        id = "search-field"
                        val onChange = {
                            val grid = document.getElementById("grid-icons")
                            val search = (document.getElementById(id) as HTMLInputElement).value
                            val filtered = response?.filter { it.key.contains(search) || it.value.contains(search) }
                            response?.forEach {
                                document.getElementById("grid-item-${it.key}")?.remove()
                            }
                            filtered?.forEach {
                                grid?.append {
                                    GridItem(it)
                                }
                            }
                        }
                        onChangeFunction = {
                            onChange()
                        }
                        onKeyUpFunction = {
                            onChange()
                        }
                    }
                }
            }
            div("grid") {
                id = "grid-icons"
            }
        }
        /*div("sticky picker-card") {
                div("column") {
                    id = "selected-icons"
                }
            }*/
    }
}

fun String.toSymbol() = Char(this.toInt(16)).toString()