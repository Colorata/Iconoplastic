import extensions.elementFromId
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import kotlinx.html.js.onKeyUpFunction
import org.w3c.dom.HTMLInputElement
import ui.GridItem

var isBarExpanded = false

fun TagConsumer<*>.App() {
    var response: Map<String, String>? = null
    div("row space-between") {
        Api().getCodepoints {
            response = it
            val grid = document.getElementById("grid-icons")
            response?.forEach {
                grid?.append {
                    GridItem(it)
                }
            }
            elementFromId<HTMLInputElement>("search-field")?.focus()
        }
        div("row fill-max-width") {
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
                                val filtered =
                                    response?.filter {
                                        it.key.contains(search, true) || it.value.contains(
                                            search,
                                            true
                                        )
                                    }
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
        }
        div("column sticky") {
            div("picker-card") {
                div("column") {
                    id = "selected-icons"
                }
            }
        }
    }

    footer {
        div("column") {
            id = "footer"
            div("bottom-bar") {
                div("row marquee") {
                    id = "bottom-bar"
                }
                span("icon button click-pointer stick-right surface-variant-background rotate") {
                    id = "bar-expand-button"
                    +"\uE5CE"
                    onClickFunction = {
                        val bar = document.getElementById("expanded-bottom-bar")
                        val button = document.getElementById("bar-expand-button")
                        console.log(bar)
                        if (isBarExpanded) {
                            console.log(bar?.className + "fjalf")
                            bar?.className =
                                bar?.className?.replace(" active", "") ?: ""
                            isBarExpanded = false
                            button?.className = button?.className?.replace(" active", "") ?: ""
                        } else {
                            isBarExpanded = true
                            console.log(bar?.className)
                            bar?.className += " active"
                            button?.className += " active"
                        }
                    }
                }
            }
            div("expanded-bottom-bar") {
                id = "expanded-bottom-bar"
                div("column") {
                    id = "bar-selected-icons"
                }
            }
        }
    }
}

fun main() {
    window.onload = {
        document.body?.append {
            App()
        }
    }
}

fun String.toSymbol() = Char(this.toInt(16)).toString()